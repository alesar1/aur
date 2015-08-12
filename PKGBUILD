# Maintainer: Adrian Perez <aperez@igalia.com>
# Co-Maintainer: Giancarlo Razzolini <grazzolini@gmail.com>
pkgname='tinyssh'
pkgver='20150801'
pkgrel='1'
pkgdesc='Small SSH server using NaCl / TweetNaCl'
url='http://tinyssh.org'
arch=('x86_64' 'i686' 'arm')
license=('Public Domain')
makedepends=('gcc' 'make')
install='tinyssh.install'
source=("http://mojzis.com/software/${pkgname}/${pkgname}-${pkgver}.tar.bz2"
	tinyssh@.socket tinyssh@.service tinysshgenkeys.service)
sha512sums=('63f7734d11cc831bb2bc83127579e47076af922a0b3f60f70a0cf5d679f34a7e7529a73c2cfc21d3a3ca74d5ce76b4c0f1defc76604b51ed07e3b07ecbc28d5a'
            '9fbc5ae3b6d1df6d78eedf812fdd8fe115e81fc0811f4799d541e37239d53db22203e691026ed479a38c9f17043e52d43b44054be51ae03c2f12f3f235c5b83a'
            '9c9ba78c5b61f64f42f59cfe556519d9ab2c3e4d45f36d6f78c5e7728b050c494673239630dae66398006f3f20fb3a26f22899cd0728ed17e61c655b372236b3'
            '415cdfe649eedcbb11a263938c0a66bef42432210baa2e2c9e428d5e8e486fb4dedad53b9fdb9086bf97ca506909d3b3054aaca56f02c063e0b8d5fab4e56198')

build () {
	cd "${srcdir}/${pkgname}-${pkgver//./}"
	make
}

package () {
	cd "${srcdir}/${pkgname}-${pkgver//./}"
	make install DESTDIR="${pkgdir}"

	# Nowadays /usr/sbin is a symlink to /usr/bin
	mv "${pkgdir}"/usr/{s,}bin

        install -m 755 -d ${pkgdir}/etc/tinyssh

        install -m 755 -d "${pkgdir}/usr/lib/systemd/system"
	install -m 644 -t "${pkgdir}/usr/lib/systemd/system" \
		"${srcdir}/tinysshgenkeys.service" \
		"${srcdir}/tinyssh@.service" \
		"${srcdir}/tinyssh@.socket"
}
