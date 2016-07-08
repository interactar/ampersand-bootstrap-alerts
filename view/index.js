var View = require('ampersand-view');
window.$ = window.jQuery = require('jquery');
var bootstrap = require('bootstrap');

module.exports = View.extend({
  template:require('./template.hbs'),
  autoRender:true,
  props:{
    type:['string',true,'alert-success'],
    message:['string',true,'the message'],
    title:['string',false],
  },
  derived:{
    typeClass:{
      deps:['type'],
      fn:function(){
        return this.type + ' alert alert-dismissible shadow fade in';
      }
    }
  },
  bindings:{
    message:{type:'text',hook:'message'},
    title:[{
      type:'text',hook:'title'
    },{
      type:'toggle',hook:'title'
    }],
    typeClass:{type:'attribute',name:'class',hook:'alert-type'}
  },
  render:function(){
    this.renderWithTemplate(this);
    $('body .alerts-container').append( this.el );
    $('.alert').slideDown();
  }
});
