# Maintainer: kedap <dxhqezk@hi2.in>

pkgname=apmpkg-git-dev
_pkgname=apmpkg
pkgver=106.34c9bb6
pkgrel=1
pkgdesc="Un administrador de paquetes universal para linux como modelo: PKGBUILD de la rama develop"
arch=('x86_64')
url="https://github.com/Kedap/apmpkg"
license=('Apache')
depends=('git' 'python-pip' 'python2-pip' 'wget' 'fakeroot' 'ruby-bundler' 'rsync')
makedepends=('git' 'cargo')
conflicts=('apmpkg')
source=("git+https://github.com/kedap/${_pkgname}")
sha256sums=('SKIP')

pkgver(){
    cd "$_pkgname"
    git checkout develop > /dev/null
    echo "$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

build() {
	cd "$_pkgname"
    git checkout develop
	cargo build --release --locked
}

check() {
	cd "$_pkgname"
	cargo test --release --locked
}

package() {
	cd "$_pkgname"
    git checkout develop
	install -Dm 755 "target/release/${_pkgname}" -t "${pkgdir}/usr/bin"
	mkdir -p ${pkgdir}/etc/apmpkg/iiabc
	cp -r src/iiabc/ ${pkgdir}/etc/apmpkg/
	mkdir -p ${pkgdir}/etc/apmpkg/paquetes
    install -Dm 644 "man/${_pkgname}.1" -t ${pkgdir}/usr/share/man/man1
    install -Dm 644 "man/${_pkgname}-en.1" -t ${pkgdir}/usr/share/man/man1
}
