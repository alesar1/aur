# Maintainer: Chipster Julien <julien dot chipster @ archlinux dot fr>
pkgname=goweatherserver
url="https://github.com/Chipsterjulien/goweatherserver"
pkgver=0.0.2
pkgrel=2
pkgdesc="A server who take temperature from TCP connection and save into a database"
arch=('any')
license=('WTFPL')
makedepends=(go)
options=('!strip')
source=($pkgname-$pkgver.tar.gz)
install=goweatherserver.install

_builddir="$pkgname-$pkgver"

build() {
    GOPATH_exist=1
    if [ -z $GOPATH ]; then
        # path don't exit
        GOPATH_exist=0

        # create gopath directory
        mkdir -p .gopath/{bin,src}
        # export var
        export GOPATH=~/.gopath
    fi

    # Getting some libs
    go get github.com/gin-gonic/gin
    go get github.com/jinzhu/gorm
    go get github.com/mattn/go-sqlite3
    go get github.com/op/go-logging
    go get github.com/spf13/viper

    cd "$_builddir"

    go build || return 1

    if [ $GOPATH_exist == 0 ]; then
        rm -rf ~/.gopath
        export GOPATH=
    fi
}

package() {
    cd "$_builddir"

    # goweatherserver.toml
    install -Dm644 cfg/"$pkgname"_sample.toml \
        "$pkgdir"/etc/$pkgname/"$pkgname"_sample.toml || return 1

    # Create log directory
    install -dm755 "$pkgdir"/var/log/$pkgname || return 1

    # Create db directory
    install -dm755 "$pkgdir"/var/lib/$pkgname || return 1

    # goweatherserver.service
    install -Dm644 cfg/"$pkgname".service \
        "$pkgdir"/usr/lib/systemd/system/"$pkgname".service || return 1

    # goweatherserver binary
    install -m755 -o root -g root -D "$srcdir"/$pkgname-$pkgver/$pkgname-$pkgver \
        "$pkgdir"/usr/bin/$pkgname || return 1
}
sha512sums=('97e8ae2646639064df87199f25844060a794dda7f7ac68a683a9b5bc0af85ab4cea7b69e9829112512e8f28f2cf5c723553211e7ed0233946de6689326ec79e5')
