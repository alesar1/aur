# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>
# Maintainer: Florian Dejonckheere <florian@floriandejonckheere.be>

pkgname=recuerde
pkgver=0.2.0_rc4
_pkgver=0.2.0-rc4
pkgrel=2
pkgdesc="A simple and intuitive todo list."
arch=('i686' 'x86_64')
url="http://code.google.com/p/recuerde"
license=('GPL')
depends=('python' 'wxpython' 'pygtk' 'sqlite3')
changelog=ChangeLog
source=("http://recuerde.googlecode.com/files/${pkgname}-${_pkgver}.tar.bz2")
md5sums=('61c8974e09d9b7a92ff758f8a8d61f9b')

prepare(){
	cd "${srcdir}/${pkgname}-${_pkgver}"
	sed 's|/usr/|../../pkg/usr/|' -i install
	sed 's|ln -s|#ln -s|' -i install
}

package(){
	cd "${srcdir}/${pkgname}-${_pkgver}"
	./install
	echo -e "#!/bin/bash\n\ncd /usr/lib/${pkgname}/\npython2 ./main.pyw" > ${pkgdir}/usr/bin/${pkgname}
	chmod 755 ${pkgdir}/usr/bin/${pkgname}
}
