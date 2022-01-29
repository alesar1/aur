# Maintainer: AlphaJack <alphajack at tuta dot io>
# Maintainer: Stefan Tatschner <stefan@rumpelsepp.org>

pkgname="dendrite"
pkgver=0.6
pkgrel=2
pkgdesc="A second-generation Matrix homeserver written in Go"
url="https://matrix.org/docs/projects/server/dendrite"
license=("Apache")
arch=("x86_64" "i686" "armv6h" "armv7h" "aarch64")
makedepends=("go>=1.16")
optdepends=("postgresql: recommended database for large instances")
source=("$pkgname-$pkgver.tar.gz::https://github.com/matrix-org/dendrite/archive/v$pkgver/$pkgname-v$pkgver.tar.gz"
        "$pkgname.sysusers"
        "$pkgname.tmpfiles"
        "$pkgname.service")
sha256sums=('3c7ce45cdb6ec9e03ef2d1514ed0e2d585e387e43bc7dc61d277207a5f4f7e15'
            'aba328d7a7244e82f866f9d0ead0a53e79e1590b9c449ad6d18ff2659cb5e035'
            '8da956f9fcc7c6ea844cea53c823fcfa4376acf04ecd9bceb1a908a85846c90f'
            '8aac18652906202cd2eedbcc5ea68d87a3ece27cfcba13762b66802c046e0e49')
install="$pkgname.install"

prepare(){
 cd "$pkgname-$pkgver"
 # hotfix for 32 bit, will be implemented in 0.6.1
 sed -i "go.mod" \
     -e "s|github.com/Shopify/sarama v1.29.0|github.com/Shopify/sarama v1.31.0|"
 go mod download "github.com/Shopify/sarama"
 go get "github.com/Shopify/sarama@v1.31.0"
 go get "github.com/eapache/go-xerial-snappy@v0.0.0-20180814174437-776d5712da21"
}

build(){
 cd "$pkgname-$pkgver"
 export CGO_CPPFLAGS="${CPPFLAGS}"
 export CGO_CFLAGS="${CFLAGS}"
 export CGO_CXXFLAGS="${CXXFLAGS}"
 export CGO_LDFLAGS="${LDFLAGS}"
 export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
 go build "./cmd/dendrite-monolith-server"
 go build "./cmd/generate-config"
 go build "./cmd/generate-keys"
 go build "./cmd/create-account"
}

check(){
 cd "$pkgname-$pkgver"
 export CGO_CPPFLAGS="${CPPFLAGS}"
 export CGO_CFLAGS="${CFLAGS}"
 export CGO_CXXFLAGS="${CXXFLAGS}"
 export CGO_LDFLAGS="${LDFLAGS}"
 export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
 go test "./cmd/dendrite-monolith-server"
}

package(){
 cd "$pkgname-$pkgver"
 install -D -m 755 "$pkgname-monolith-server"   "$pkgdir/usr/bin/$pkgname"
 install -D -m 755 "generate-config"            "$pkgdir/usr/bin/$pkgname-generate-config"
 install -D -m 755 "generate-keys"              "$pkgdir/usr/bin/$pkgname-generate-keys"
 install -D -m 755 "create-account"             "$pkgdir/usr/bin/$pkgname-create-account"
 install -D -m 644 "$pkgname-config.yaml"       "$pkgdir/etc/$pkgname/config-example.yaml"
 install -D -m 644 "$srcdir/$pkgname.service"   "$pkgdir/usr/lib/systemd/system/$pkgname.service"
 install -D -m 644 "$srcdir/$pkgname.sysusers"  "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
 install -D -m 644 "$srcdir/$pkgname.tmpfiles"  "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
}
