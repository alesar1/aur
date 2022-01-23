# Maintainer: Matthew Gamble <git@matthewgamble.net>
# Contributor: Kyle Brennan <kyle@metalspork.xyz>

pkgname=resticprofile
pkgver=0.16.0
_commit_hash="433ecae5522c0cbb794dea3787d57cf0c44bf2c3"
pkgrel=1
pkgdesc="Configuration profiles for restic backup"
arch=("x86_64")
url="https://github.com/creativeprojects/resticprofile"
license=("GPL3")
depends=("glibc" "restic")
makedepends=("go")
source=("https://github.com/creativeprojects/resticprofile/archive/v${pkgver}.tar.gz")
sha256sums=("082f74ffced8e4f35b86a22b40013faaba70a12a9f5b676b2f27c030f2c2510d")

build() {
    cd "resticprofile-${pkgver}"

    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"
    export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"

    LC_ALL=C _build_date="$(date)"

    go mod vendor
    go build -o resticprofile -v -ldflags "-X 'main.commit=${_commit_hash}' -X 'main.date=${_build_date}' -X 'main.builtBy=makepkg'"
}

package() {
    cd "resticprofile-${pkgver}"

    install -Dm755 resticprofile "${pkgdir}/usr/bin/resticprofile"
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/resticprofile/LICENSE"
    install -Dm644 README.md "${pkgdir}/usr/share/doc/resticprofile/README.md"

    install -dm755 "${pkgdir}/usr/share/resticprofile/examples/"
    install -Dm644 examples/* "${pkgdir}/usr/share/resticprofile/examples/"
    install -dm755 "${pkgdir}/usr/share/resticprofile/contrib/systemd/"
    install -Dm644 contrib/systemd/* "${pkgdir}/usr/share/resticprofile/contrib/systemd/"
}
