# Maintainer: Yauheni Kirylau <actionless dot loveless AT gmail.com>
# shellcheck disable=SC2034,SC2154

pkgname=pikaur
pkgver=0.9.1
pkgrel=1
pkgdesc="AUR helper with minimal dependencies. Review PKGBUILDs all in once, next build them all without user interaction."
arch=('any')
url="https://github.com/actionless/pikaur"
license=('GPLv3')
source=(
	"$pkgname-$pkgver.tar.gz"::https://github.com/actionless/pikaur/archive/"$pkgver".tar.gz
)
md5sums=(
	"SKIP"
)
depends=(
	'pyalpm'
	'python-setuptools'
	'git'
	'sudo'
	'fakeroot'
)
conflicts=('pikaur-git')

build() {
	cd "${srcdir}/${pkgname}" || exit 2
	sed -i -e "s/VERSION.*=.*/VERSION = '${pkgver}'/g" pikaur/config.py
	python setup.py install --prefix=/usr --root="$pkgdir/" --optimize=1
	make
}

package() {
	cd "${srcdir}/${pkgname}" || exit 2
	for lang in fr ru; do
		install -Dm644 "locale/${lang}.mo" "$pkgdir/usr/share/locale/${lang}/LC_MESSAGES/pikaur.mo"
	done
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	cp -r "${srcdir}/${pkgname}/packaging/"* "${pkgdir}"
}
