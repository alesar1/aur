# Maintainer: Andres Alejandro Navarro Alsina <aanavarroa@unal.edu.co>
# Contributor: G. Bernstein, M. Jarvis and E. Sheldon 
pkgbase=python-pixmappy-git
pkgname=("python-pixmappy-git" "python2-pixmappy-git")
pkgver=r39.b7c163f
pkgrel=1
pkgdesc="Python interface to gbdes pixel map (astrometry) solutions "
arch=('any')
url="https://github.com/gbernstein/pixmappy"
license=('BSD')
makedepends=('git' 'python-astropy' 'python-future' 'python-numpy' 'python-scipy' 'python-yaml' 'python2-astropy' 'python2-future' 'python2-numpy' 'python2-scipy' 'python2-yaml' 'python-setuptools' 'python2-setuptools')
optdepends=('python-scikit-learn' 'python2-scikit-learn' 'python-lmfit' 'python2-lmfit')
checkdepends=('python-setuptools' 'python2-setuptools')
source=("${pkgbase}::git+${url}#branch=pickle")
md5sums=('SKIP')

pkgver() {
  	 cd "${pkgbase}"
  	 printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	  cp -a $pkgbase{,-py2}
}

build() {
	cd "$srcdir"/$pkgbase
	sed -i 's_distutils.core_setuptools_g' setup.py 
	python setup.py build

	cd  "$srcdir"/$pkgbase-py2
	sed -i 's_distutils.core_setuptools_g' setup.py 
	python2 setup.py build
}

check() {
	cd "$srcdir"/$pkgbase/tests
	nosetests -v || warning 'Tests failed'

	cd "$srcdir"/$pkgbase-py2/tests
	nosetests2 -v || warning 'Tests failed'
}

package_python-pixmappy-git() {
			      depends=('')
			      cd $pkgbase
			      #sed -i 's_distutils.core_setuptools_g' setup.py
			      python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
			      install -Dm644 Piff_LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE	      
}

package_python2-pixmappy-git() {
			      depends=('')
			      cd $pkgbase-py2
			      #sed -i 's_distutils.core_setuptools_g' setup.py 
			      python2 setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
			      install -Dm644 Piff_LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE	      
}

