# Maintainer: robertfoster
# Contributor: kehon

pkgname=traccar
pkgver=3.15
pkgrel=1
pkgdesc="Open source GPS tracking system"
arch=('i686' 'x86_64')
url="http://www.traccar.org/"
license=('APACHE')
depends=(java-runtime)
source=("https://github.com/tananaev/traccar/releases/download/v${pkgver}/$pkgname-linux-$pkgver.zip"
"$pkgname.service")

package() {
	cd ${srcdir}
	./traccar.run --noexec --target $pkgdir/opt/traccar/
	install -m755 -d "${pkgdir}/usr/lib/systemd/system"
	install -m644 "${srcdir}/traccar.service" "${pkgdir}/usr/lib/systemd/system/"
	install -m755 -d "${pkgdir}/opt/traccar/init.d"
	chmod 755 -R $pkgdir/opt/*
}

md5sums=('5e0d59fba9a112a3a2720e826d969f47'
'3e230b1b98fb5d0ae71ee08ab96a7c92')
