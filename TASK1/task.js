window.addEventListener('scroll', function() {
    const navigation = document.getElementById('navigation');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > 0) {
      navigation.style.backgroundColor = '#555';
      navigation.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.5)';
    } else {
      navigation.style.backgroundColor = '#333';
      navigation.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    }
  }); 