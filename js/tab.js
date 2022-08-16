$( function() {
  $( "#tabs" ).tabs();
} );

const tabList = document.querySelectorAll('.service_tab_menu .tab_list li,new_tab_menu .tab_list li');
const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
let activeCont = ''; 

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('is_on');
      contents[j].style.display = 'none';
    }

    this.parentNode.classList.add('is_on');

    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}

$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
})