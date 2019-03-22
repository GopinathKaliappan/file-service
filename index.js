

const downloadFiles = function (urls = []) { // ex ['url1', 'url2']
  	urls.map((item)=> {

  		let link=document.createElement('a'); // create a virtual a tag 
	    link.href=item; // Assign url to the tag 
	    link.download="true"; // set the document text
	    link.target = '_blank'; 
	    document.body.appendChild(link); // firefox fix 
	    link.click();	// programmatical click
	    link.remove();  // remove dom from the body

  	})
  }
 const downloadPdfFiles = function(urls = []) { // ex ['url1', 'url2']
  	urls.map((item)=> {

  		let link=document.createElement('a'); // create a virtual a tag 
	    link.href=item; // Assign url to the tag 
	    link.download="true"; // set the document text
	    link.target = '_blank'; 
	    document.body.appendChild(link); // firefox fix 
	    link.click();	// programmatical click
	    link.remove();  // remove dom from the body

  	})
  } 
  const downloadImageFiles = (urls, fileName = 'file') => {
  		urls.map((item, i)=> {
 			let xhr = new XMLHttpRequest();
		    xhr.open("GET", item, true);
		    xhr.responseType = "blob";
		    xhr.onload = function(){
		        let urlCreator = window.URL || window['webkitURL']
		        let imageUrl = urlCreator.createObjectURL(this.response);
		        let tag = document.createElement('a');
		        tag.href = imageUrl;
		        tag.download = fileName + i;
		        document.body.appendChild(tag);
		        tag.click();
		        document.body.removeChild(tag);
		    }
		    xhr.send();
	  	})
	}
module.exports = {
	downloadFiles,
	downloadPdfFiles,
	downloadImageFiles
}


