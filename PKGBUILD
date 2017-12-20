# Maintainer: Miguel de Val-Borro <miguel@archlinux.net>
# Contributor: Arthur Danskin <arthurdanskin@gmail.com>
# Contributor: Mike Ressler <mike.ressler@alum.mit.edu>

pkgname=python2-pyfits
pkgver=3.5
pkgrel=1
pkgdesc="A python language interface to FITS formatted data files"
url="http://www.stsci.edu/resources/software_hardware/pyfits"
license=('BSD')
arch=('i686' 'x86_64')
source=("https://files.pythonhosted.org/packages/source/p/pyfits/pyfits-${pkgver}.tar.gz")
md5sums=('68b6c072ff6883fe91cde29030f8b6e8')

depends=('python2>=2.6' 'python2-numpy')

build() {
    cd "${srcdir}/pyfits-${pkgver}"
    python2 setup.py build
}

package() {
    cd "${srcdir}/pyfits-${pkgver}"
    python2 setup.py install --prefix=/usr --root="${pkgdir}"

    install -m755 -d "${pkgdir}/usr/share/licenses/python2-pyfits"
    install -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/python2-pyfits/"

    sed -i -e "s|#![ ]*/usr/bin/python$|#!/usr/bin/python2|" \
	   -e "s|#![ ]*/usr/bin/env python$|#!/usr/bin/env python2|" \
	   -e "s|#![ ]*/bin/env python$|#!/usr/bin/env python2|" \
	    $(find ${pkgdir} -name '*.py')
 
    mv ${pkgdir}/usr/bin/fitscheck ${pkgdir}/usr/bin/fitscheck2
    mv ${pkgdir}/usr/bin/fitsdiff ${pkgdir}/usr/bin/fitsdiff2
}
