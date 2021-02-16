import { Container, Divider, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { VendorTemplate } from '../../../Components/Template/VendorTemplate';
import classes from './AddItem.module.css';

 class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: '',name:''};
      }
     
      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
     

      handleFormReset = () => {
        this.setState(() => this.state.name='')
      }
      render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
      <>
      <VendorTemplate>
       <Grid container>
       
            <Grid item xs={12} className={classes.grid}>
               <Paper  className={classes.paper}>
             
               <Container className={classes.container}>
               
                   <Grid container>
                       <Grid item xs={12}>
                        <h4 className={classes.title}>
                            Add Item Information
                        </h4>
                       </Grid>
                   </Grid>
                   <form onSubmit={(e)=>this._handleSubmit(e)} onReset={this.handleFormReset}  >
                   <Grid container>
                   <Grid item xs={10}  sm={6}>
       <span className={classes.text}  htmlFor="defaultFormRegisterNameEx" >
          Item name
        </span>
        <input className={classes.inputfield} name="name" type="text" id="defaultFormRegisterNameEx" />
        </Grid>  
        <Grid item xs={10}  sm={6}>
       <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
          Store Type
        </span>
        <input className={classes.inputfield} name="name" type="text" id="defaultFormRegisterNameEx" />
        </Grid>
        <Grid item xs={10}  sm={6}>
       <span className={classes.text}   htmlFor="defaultFormRegisterNameEx" >
          Item Description
        </span>
        <textarea className={classes.inputfield} rows='3' name="name"  type="text" id="defaultFormRegisterNameEx" />
        </Grid>  
        <Grid item xs={10}  sm={6}>
       <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
          Stock
        </span>
        <input className={classes.inputfield} name="name" type="text" id="defaultFormRegisterNameEx" />
        </Grid>
        </Grid>
        <Divider></Divider>
        <Grid container>
                       <Grid item xs={12}>
                        <h4 className={classes.title}>
                            Item Price
                        </h4>
                       </Grid>
                   </Grid>
                   <Grid container>
                   <Grid item xs={10}  sm={6}>
       <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
        Price
        </span>
        <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
        </Grid>  
        <Grid item xs={10}  sm={6}>
       <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
         Discount Price
        </span>
        <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
        </Grid>
         </Grid>
         <Divider/>
        
         <Grid container>
                       <Grid item xs={12}>
                        <h4 className={classes.title}>
                            Item Images
                        </h4>
                       </Grid>
                   </Grid> 
                  
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
        <div className="imgPreview">
          {$imagePreview}
        </div>
        <Divider/>
        <Grid container className={classes.Button}>
        <button className={classes.ResetButton}
            type="reset" 
            onClick={(e)=>this.handleFormReset(e)}>Reset</button>
        <button className={classes.submitButton} 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
</Grid>
</form>
  
         </Container>
         
                   </Paper>
       </Grid>
  
          
       </Grid>
  
  </VendorTemplate>
  </>
    )
}};
export {AddItem};