# Maintainer: Johan Brandhorst <jbrandhorst@buf.build>
pkgname=buf
pkgver=0.20.1
pkgrel=2
pkgdesc="A new way of working with Protocol Buffers"
arch=("any")
url="https://buf.build"
license=('Apache')
makedepends=('go')
source=("https://github.com/bufbuild/buf/archive/v${pkgver}.tar.gz")

build() {
	cd ${pkgname}-${pkgver}
	go build -trimpath -buildmode=pie -mod=readonly -modcacherw -o . ./cmd/{buf,protoc-gen-buf-check-lint,protoc-gen-buf-check-breaking}
	./buf bash-completion >completion.bash
	./buf zsh-completion >completion.zsh
}

package() {
	install -Dm755 "${pkgname}-${pkgver}/buf" "${pkgdir}/usr/bin/buf"
	install -Dm755 "${pkgname}-${pkgver}/protoc-gen-buf-check-lint" "${pkgdir}/usr/bin/protoc-gen-buf-check-lint"
	install -Dm755 "${pkgname}-${pkgver}/protoc-gen-buf-check-breaking" "${pkgdir}/usr/bin/protoc-gen-buf-check-breaking"
	install -Dm644 "${pkgname}-${pkgver}/completion.bash" "${pkgdir}/etc/bash_completion.d/buf"
	install -Dm644 "${pkgname}-${pkgver}/completion.zsh" "${pkgdir}/usr/share/zsh/site-functions/_buf"
}

sha256sums=('2c82f3b6a43fcd3daafd14cb8045ffb7244f474217cb47c0e14683d964541c55')
