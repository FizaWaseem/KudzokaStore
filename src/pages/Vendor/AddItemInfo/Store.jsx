import { Container, Divider, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { VendorTemplate } from '../../../Components/Template/VendorTemplate';
import { TimePickers } from '../../../Components/timePicker';
import classes from './AddItem.module.css';

 class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: '',name:'',};
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
      <VendorTemplate>
       <Grid container>
       
            <Grid item xs={12} className={classes.grid}>
               <Paper  className={classes.paper}>
             
               <Container className={classes.container}>
               
                   <Grid container>
                       <Grid item xs={12}>
                        <h4 className={classes.title}>
                           Store Information
                        </h4>
                       </Grid>
                   </Grid>
                   <form onSubmit={(e)=>this._handleSubmit(e)} onReset={this.handleFormReset}  >
                   <Grid container>
                   <Grid item xs={10}  sm={6}>
                   <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
        <div className="imgPreview">
          {$imagePreview}
        </div>
         </Grid>
         <Grid item xs={10}  sm={6}> <button className={classes.DeleteButton}
            type="delete" basiccontent="clear pictures" onClick={this.handleClearImages} 
         >Delete</button> 
             </Grid>  
        <Grid item xs={10}  sm={6}>
       <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
          Store Name
        </span>
        <input className={classes.inputfield} name="name" type="text" id="defaultFormRegisterNameEx" />
        </Grid>
        <Grid item xs={10}  sm={6}>
       <span className={classes.text}   htmlFor="defaultFormRegisterNameEx" >
       Store Type
        </span>
        <input className={classes.inputfield} name="name" rows="10" type="text" id="defaultFormRegisterNameEx" />
        </Grid>  
        <Grid item xs={10}  sm={6}>
       <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
         Phone-Number
        </span>
        <input className={classes.inputfield} name="name" type="number" id="defaultFormRegisterNameEx" />
        </Grid>
        <Grid container xs={6}>
    Timing
        <Grid item xs={3} >
        <TimePickers/>
         </Grid>
        </Grid>
        <Divider></Divider>
        <Grid container>
                       <Grid item xs={12}>
                        <h4 className={classes.title}>
                            Share Location
                        </h4>
                       </Grid>
                   </Grid>
                   <Grid container>
                   <Grid item xs={10}  sm={6}>
       <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
       Country
        </span>
        <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
        </Grid>  
        <Grid item xs={10}  sm={6}>
       <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
        City
        </span>
        <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
        </Grid>
        <Grid item xs={10}  sm={7}>
       <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
      Address
        </span>
        <textarea className={classes.inputfield} rows='2' type="text" id="defaultFormRegisterNameEx" />
        </Grid>  
         </Grid>
       
        
        
        <Grid container className={classes.Button}>
    
        <button className={classes.submitButton} 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload </button>
</Grid>
</Grid>

</form>
  
         </Container>
         
                   </Paper>
       </Grid>
  
          
       </Grid>
       </VendorTemplate>
       
    )
}}
export {Store};