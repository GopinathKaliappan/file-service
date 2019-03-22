# FileService

FileService is an Angular Library,  Which is mainly used to download pdf, xl, img, jpg. Files.

## Installation



```bash
npm i fileservice
```

## Usage

```javascript
import { FileService } from 'fileservice';

constructor(private fileService: FileService) { 
    // To Download PDF and Xl Files  
    this.fileService.downloadFile(['http://file.xls', 'http://file.pdf']);

    // To Download Image Files  
    this.fileService.downloadImageFiles(['http://image.jpg', 'http://image.png']);

    // To Download PDF Files  
    this.fileService.downloadPdfFiles(['http://files0.jpg', 'http://files.pdf']);

}

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)