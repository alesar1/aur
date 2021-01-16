# Maintainer: Harvey Tindall <hrfee@protonmail.ch>
pkgname=jfa-go-git
_pkgname=jfa-go
pkgver=r221.ffc6257
pkgrel=2
pkgdesc="A web app for managing users on Jellyfin"
arch=("x86_64")
url="https://github.com/hrfee/jfa-go"
license=('MIT')
makedepends=('go>=1.14' 'python>=3.6.0-1' 'nodejs' 'npm' 'git')
checkdepends=()
optdepends=()
provides=("jfa-go")
conflicts=("jfa-go")
replaces=()
backup=()
options=()
install=
changelog=
source=("${pkgname}::git+https://github.com/hrfee/jfa-go.git")
noextract=()
md5sums=(SKIP)
validpgpkeys=()

pkgver() {
    cd $pkgname
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd ${pkgname}
    make configuration npm email version
    export GOPATH="$(go env GOPATH)"
    go get github.com/swaggo/swag/cmd/swag
    "${GOPATH}"/bin/swag init -g main.go
}

build() {
	cd ${pkgname}
	make typescript compile
}

package() {
    cd ${pkgname}
    make copy
    install -d "$pkgdir"/opt
    make install DESTDIR="$pkgdir"/opt
    mkdir -p "$pkgdir"/usr/bin
    chown -R root "$pkgdir"/opt/$_pkgname/
    chmod 755 "$pkgdir"/opt/$_pkgname/$_pkgname
    ln -sf /opt/$_pkgname/$_pkgname "$pkgdir"/usr/bin/$_pkgname 
    install -Dm644 LICENSE -t "$pkgdir"/usr/share/licenses/$_pkgname
}
