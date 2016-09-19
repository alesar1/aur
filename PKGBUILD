# Maintainer: Johannes Pfrang <johannespfrang+arch@gmail.com>

pkgname=teleport
pkgver=1.1.0
pkgrel=1
# TODO: shorten?
pkgdesc="Modern SSH server for remotely accessing clusters of Linux servers via SSH or HTTPS"
# TODO: build for i686 possible?
arch=('x86_64')
url="https://gravitational.com/teleport"
license=('Apache')
# TODO: should we have separate packages for server and client?
#groups=()
makedepends=('git' 'go>=1.7.0')
install=teleport.install
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/gravitational/teleport/archive/v$pkgver.tar.gz"
        "teleport.service")
sha256sums=('f86e9bc410fa90d139df0268a6f7be194b406e94a1df5c029287dda262f41015'
            '3e332207cfa984a531044d47fde379a9c242aa92e0fef7804a031dff865396dc')

prepare() {
    # Set up directory structure for `go build`
    mkdir -p "${srcdir}/src/github.com/gravitational/"
    mv -f "${pkgname}-${pkgver}" "${srcdir}/src/github.com/gravitational/teleport"
}

build() {
    cd "${srcdir}/src/github.com/gravitational/teleport"
    export GOPATH="$srcdir"
    # Build with flags from upstream Makefile
    go build -o teleport -i -ldflags -w ./tool/teleport
    go build -o tctl -i -ldflags -w ./tool/tctl
    go build -o tsh -i -ldflags -w ./tool/tsh
}

check() {
    cd "${srcdir}/src/github.com/gravitational/teleport"
    # Copied from upstream Makefile, but without coverage analysis and vet
    # Note: Will work with next version
    #go test -v ./tool/tsh/... \
    #                    ./lib/... \
    #                    ./tool/teleport... -tags test
}

package() {
    # systemd unit file
    mkdir -p "${pkgdir}/usr/lib/systemd/system"
    install -m644 -t "${pkgdir}/usr/lib/systemd/system/" "${srcdir}/teleport.service"

    cd "${srcdir}/src/github.com/gravitational/teleport"

    # docs
    mkdir -p "${pkgdir}/usr/share/doc/teleport"
    cp -dpr --no-preserve=ownership docs/* "${pkgdir}/usr/share/doc/teleport/"

    # no man pages (yet)

    # binaries
    mkdir -p "${pkgdir}/usr/bin"
    install -m755 -t "${pkgdir}/usr/bin/" teleport tctl tsh

    # assets
    mkdir -p "${pkgdir}/usr/share/teleport"
    cp -dpr --no-preserve=ownership web/dist/* "${pkgdir}/usr/share/teleport"
}
