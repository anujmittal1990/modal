'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const closeModal=document.querySelector('.close-modal');
//btnsShowModel is a Type of Array
const btnsShowModel=document.querySelectorAll('.show-modal'); 

const show = function()
{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hide=function()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');   
}

//display button text
for(let i=0; i< btnsShowModel.length; i++)
btnsShowModel[i].addEventListener('click',show);
closeModal.addEventListener('click',hide)
overlay.addEventListener('click',hide)

document.addEventListener('keydown',function(e)
{
    console.log(e.key);
    if (e.key==='Escape' && !modal.classList.contains('hidden'))
    {
          hide();
    }
});