# Maintainer: Dušan Simić <dusan.simic1810@gmail.com>

_electron=electron
_repo=https://github.com/ajbura/cinny
pkgname=(cinny-web)
pkgbase=cinny
pkgver=1.6.1
_commit=eb753a3f32e2e552b3a16f59ab3a3051245a641d
pkgrel=1
pkgdesc='Yet another matrix client — '
arch=(any)
url=https://cinny.in
license=(MIT)
depends=()
makedepends=(npm git)
source=("$pkgbase-web::git+$_repo.git#commit=$_commit")
sha512sums=('SKIP')

build() {
	cd "$pkgbase-web"
	npm install
	npm run build
}

package_cinny-web() {
	pkgdesc+='web version'

	cd "$pkgbase-web"

	install -d "$pkgdir/usr/share/webapps/cinny"

	cp -r dist/* "$pkgdir/usr/share/webapps/cinny"
}
