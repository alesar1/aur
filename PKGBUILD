# Maintainer: kXuan <kxuanobj at gmail dot com>

pkgname=protoc-gen-grpc-web
pkgver=1.2.1
pkgrel=1
pkgdesc='Protobuf gRPC compiler for Web Clients'
arch=('x86_64')
url='https://github.com/grpc/grpc-web'
license=('Apache2')
depends=('protobuf>=3')
source=("https://github.com/grpc/grpc-web/archive/${pkgver}.tar.gz")
sha512sums=('fbe1516e6449ac7eb45a2478346f4500aed9b0dd58cd5170d2462e4d263ccd19a2eac51d77ec43ec72c0031d95c276578913f2090ced922e3eea3ed300dfa6a6')

build() {
    cd "grpc-web-${pkgver}"
    make plugin
}

package() {
    cd "grpc-web-${pkgver}"
	install -Dm755 javascript/net/grpc/web/protoc-gen-grpc-web ${pkgdir}/usr/bin/protoc-gen-grpc-web
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

