# Maintainer: Christoph Scholz <christoph.scholz@gmail.com>
# Contributor: Hanno Zulla <kontakt@hanno.de>
pkgname=sonic-pi
_progname="Sonic Pi"
pkgver=2.10.0
pkgrel=3
pkgdesc="A music-centric programming environment, originally built for the raspberry pi."
arch=('i686' 'x86_64')
url="http://sonic-pi.net/"
license=('MIT')
depends=('lua' 'qscintilla-qt5' 'jack' 'supercollider' 'ruby-hamster' 'ruby-wavefile'
		 'ruby-activesupport' 'ruby-kramdown' 'ruby-rugged' 'ruby-multi_json')
makedepends=('cmake' 'qt5-tools' 'sed')
optdepends=('qjackctl: for graphical jackd spawning/configuration'
			'jack2: better jackd if you want to use without gui'
			'sc3-plugins-git: plugins for supercollider')
source=("https://github.com/samaaron/${pkgname}/archive/v${pkgver}.tar.gz" "${pkgname}.png" "${pkgname}.desktop"
		"${pkgname}.install" "01-remove-rpi-volume.patch" "02-do-no-require-unused-ruby-gems.patch"
		"03-use-debian-gems.patch" "04-rename-ruby-beautify-legacy.patch" "06-paths.patch" "07-examples-path.patch")
md5sums=('10cf597f124a32a70b7dfe5fe8ee1ccf' 'e3ca8a1d949baf35cdf438c8d10159ff' '19a64d717674f75918c176197650b44a'
		'20d0d75ffccf48af2728441652d8afd6' '913b8a3fbba970d980bb9bef1bdaa26b' '53dca84bfaa2865cb7fae2904282aaa5'
		'd0c35cfb6de3a2e5669ce7794b9ef3c6' 'e2151f3cc4a1a8d4a0722d3137e1a404' '00eb82f990176b49380bb9d2e7f853ba'
		'109b450500975fbe42da351d269863c9')
install="${pkgname}.install"

prepare() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	sed -i 's/lqt5scintilla2/lqscintilla2-qt5/g' "app/gui/qt/SonicPi.pro"
	patch -p1 < "${srcdir}/01-remove-rpi-volume.patch"
	patch -p1 < "${srcdir}/02-do-no-require-unused-ruby-gems.patch"
	patch -p1 < "${srcdir}/03-use-debian-gems.patch"
	patch -p1 < "${srcdir}/04-rename-ruby-beautify-legacy.patch"
	patch -p1 < "${srcdir}/06-paths.patch"
	patch -p1 < "${srcdir}/07-examples-path.patch"
	mv "app/server/vendor/ruby-beautify/lib/ruby-beautify.rb" "app/server/vendor/ruby-beautify/lib/ruby-beautify-legacy.rb"
	rm -fr "app/server/vendor/ruby-beautify/lib/ruby-beautify-legacy"
	mv "app/server/vendor/ruby-beautify/lib/ruby-beautify" "app/server/vendor/ruby-beautify/lib/ruby-beautify-legacy"
}

build() {
	cd "${srcdir}/${pkgname}-${pkgver}/app/server/bin"
    ./compile-extensions.rb
	cd "${srcdir}/${pkgname}-${pkgver}/app/gui/qt"
    ./rp-build-app
}

package() {
	install -d "${pkgdir}/usr/share/pixmaps"
    install -Dm644 "${srcdir}/${pkgname}.png" "${pkgdir}/usr/share/pixmaps"

	install -d "${pkgdir}/usr/share/applications"
	install -Dm644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications"

	cd "${srcdir}/${pkgname}-${pkgver}"
	install -d "${pkgdir}/usr/share/licenses/${pkgname}"
	install -Dm644 "app/gui/qt/info/LICENSE.html" "${pkgdir}/usr/share/licenses/${pkgname}"

	install -d "${pkgdir}/usr/bin"
	install -D "app/gui/qt/sonic-pi" "${pkgdir}/usr/bin"

	install -d "${pkgdir}/usr/share/sonic-pi"
	cp -r "etc/samples" "${pkgdir}/usr/share/sonic-pi"
	cp -r "etc/buffers" "${pkgdir}/usr/share/sonic-pi"
	cp -r "etc/snippets" "${pkgdir}/usr/share/sonic-pi"
	cp -r "etc/examples" "${pkgdir}/usr/share/sonic-pi"
	
	install -d "${pkgdir}/usr/share/doc/sonic-pi/tutorial"
	cp app/gui/qt/book/* "${pkgdir}/usr/share/doc/sonic-pi/tutorial"
	
	install -d "${pkgdir}/usr/share/doc/sonic-pi/theme/light"
	install -Dm644 "app/gui/qt/theme/light/doc-styles.css" "${pkgdir}/usr/share/doc/sonic-pi/theme/light"
	
	install -d "${pkgdir}/usr/share/doc/sonic-pi/images"
	cp -r "app/gui/qt/images/tutorial" "${pkgdir}/usr/share/doc/sonic-pi/images"
	
	install -d "${pkgdir}/usr/lib/sonic-pi/server"
	install -D "app/server/core.rb" "${pkgdir}/usr/lib/sonic-pi/server"

	install -d "${pkgdir}/usr/lib/sonic-pi/server/vendor"
	cp -r "app/server/vendor/ruby-beautify" "${pkgdir}/usr/lib/sonic-pi/server/vendor"

	install -d "${pkgdir}/usr/lib/sonic-pi/server/bin"
	install -D "app/server/bin/sonic-pi-server.rb" "${pkgdir}/usr/lib/sonic-pi/server/bin"
	
	install -d "${pkgdir}/usr/lib/sonic-pi/server/sonicpi"
	cp -r "app/server/sonicpi/lib" "${pkgdir}/usr/lib/sonic-pi/server/sonicpi"
	
	install -d "${pkgdir}/usr/share/sonic-pi/synthdefs"
	cp -r "etc/synthdefs/compiled" "${pkgdir}/usr/share/sonic-pi/synthdefs"
}
