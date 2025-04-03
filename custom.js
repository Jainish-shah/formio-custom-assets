const FieldComponent = Formio.Components.components.field;

/**
 * Custom File Upload component with drag-and-drop, Base64 encoding, and Submit button activation.
 */
class CustomFileUpload extends FieldComponent {
  constructor(component, options, data) {
    super(component, options, data);
    this.files = [];
    this.isFileValid = false; // Track if file is valid for submission
  }

  /**
   * Define the schema of your custom file upload component
   */
  static schema(...extend) {
    return FieldComponent.schema({
      type: "customfileupload",
      label: "File Upload",
      key: "customfileupload",
      input: true,
    }, ...extend);
  }

  /**
   * Define builder information like the title and icon
   */
  static builderInfo() {
    return {
      title: "Custom File Upload",
      group: "basic",
      icon: "fa fa-upload",
      weight: 0,
      documentation: "http://help.form.io/userguide/#file-component",
      schema: CustomFileUpload.schema(),
    };
  }

  /**
   * Render the file input element (for file upload).
   * Additionally, this includes a drag-and-drop area and a submit button.
   */
  render() {
    return super.render(`
      <div class="file-upload-container" ref="fileContainer">
        <label for="fileInput">Upload</label>
        <input type="file" ref="fileInput" class="form-control" multiple>
        <div ref="fileOutput"></div>
        <div class="drag-drop-area" ref="dragDropArea">
          <p>Drag and Drop your files here</p>
        </div>
        <button type="button" ref="submitButton" class="btn btn-primary" disabled>Submit</button>
      </div>
    `);
  }

  /**
   * After the HTML string has been mounted into the DOM, the DOM element is returned here.
   * Use refs to find specific elements to attach functionality to.
   *
   * @param element
   * @returns {Promise}
   */
  attach(element) {
    super.attach(element);

    // Event listener for file input change (click-to-upload)
    this.addEventListener(this.refs.fileInput, "change", this.handleFileUpload.bind(this));

    // Event listeners for drag-and-drop
    this.addEventListener(this.refs.dragDropArea, "dragover", this.handleDragOver.bind(this));
    this.addEventListener(this.refs.dragDropArea, "drop", this.handleDrop.bind(this));

    // Event listener for submit button click
    this.addEventListener(this.refs.submitButton, "click", this.handleSubmit.bind(this));

    return super.attach(element);
  }

  /**
   * Handle file upload via click.
   */
  handleFileUpload(event) {
    const files = event.target.files;
    if (files.length > 0) {
      this.files = Array.from(files);
      this.processFile(this.files[0]);
    }
  }

  /**
   * Handle drag-over event to allow files to be dropped.
   */
  handleDragOver(event) {
    event.preventDefault(); // Allow the drop by preventing the default handling of the event
    this.refs.dragDropArea.classList.add("drag-over");
  }

  /**
   * Handle drop event, extract files from the event, and display.
   */
  handleDrop(event) {
    event.preventDefault();
    this.refs.dragDropArea.classList.remove("drag-over");

    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.files = Array.from(files);
      this.processFile(this.files[0]);
    }
  }

  /**
   * Process the uploaded file, convert to Base64, and display its name.
   */
  processFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64Data = e.target.result.split(",")[1]; // Get the Base64 data
      this.setFileOutput(base64Data); // Store and display the Base64 data
      this.isFileValid = true; // File is now valid for submission
      this.updateSubmitButton(); // Enable submit button
      this.runFileValidation(file); // Run file validation API logic
    };
    reader.readAsDataURL(file); // Convert file to Base64
  }

  /**
   * Display the file name and Base64 status in the output section.
   */
  setFileOutput(base64Data) {
    const fileList = this.refs.fileOutput;
    fileList.innerHTML = `<h4>Selected File:</h4><ul>
                            <li>Name: ${this.files[0].name}</li>
                            <li>Size: ${this.files[0].size} bytes</li>
                            <li>Base64 Encoded: <span style="color: green;">Yes</span></li>
                          </ul>`;
  }

  /**
   * Update submit button based on file validation
   */
  updateSubmitButton() {
    const submitButton = this.refs.submitButton;
    if (this.isFileValid) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  /**
   * Run file validation logic (simulated API request)
   */
  runFileValidation(file) {
    const submitButton = this.refs.submitButton;
    const formData = new FormData();
    formData.append("file", file);

    // Simulating an API request to validate the file
    fetch("https://services/scanFile", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }
        return response.text();
      })
      .then((text) => {
        const result = JSON.parse(text);
        if (result === true) {
          alert("File is safe! Uploading to S3...");
          this.updateSubmitButton(); // Enable submit button
        } else if (result === false) {
          alert("File is not safe! Please upload a different file.");
          this.isFileValid = false;
          this.updateSubmitButton(); // Disable submit button
        } else {
          console.log("Unexpected result:", result);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(`An error occurred: ${error.message}`);
        this.isFileValid = false;
        this.updateSubmitButton(); // Disable submit button
      });
  }

  /**
   * Handle the submit button click event
   */
  handleSubmit() {
    if (this.isFileValid) {
      alert("File submitted successfully!");
      console.log("Base64 Data:", this.getValue()); // Here you would send the Base64 to the server
    } else {
      alert("No valid file selected.");
    }
  }

  /**
   * Get the value of the component (Base64 encoded file data).
   *
   * @returns {string}
   */
  getValue() {
    return this.files.length > 0 ? this.files[0].base64Data : ""; // Return Base64 data
  }

  /**
   * Set the value of the component (in case you need to programmatically set the file input).
   *
   * @param value
   */
  setValue(value) {
    // You can set the value here if needed, for example:
    this.files = [{ name: value, base64Data: value }]; // Simulate setting a Base64 encoded value
  }
}

// Register the custom file upload component with Form.io
Formio.use({
  components: {
    customfileupload: CustomFileUpload,
  },
});

// Example usage of the custom file upload component in a Form.io form
Formio.createForm(document.getElementById("formio"), {
  components: [
    {
      type: "customfileupload",
      key: "customfileupload",
      label: "Custom File Upload",
    },
  ],
});
