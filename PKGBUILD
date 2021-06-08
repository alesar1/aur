# Maintainer: somini <dev@somini.xyz>

pkgname=go-hnrss
pkgver=2.1
_pkgver="v$pkgver"
pkgrel=1
pkgdesc='Hacker News RSS'
arch=('x86_64' 'aarch64')
url='https://hnrss.github.io'
license=('unknown')
makedepends=('go' 'git')
backup=("etc/${pkgname}.conf")
# Use my fork for the extra features
source=(
  "https://gitlab.com/somini/go-hnrss/-/archive/v${pkgver}/${pkgname}-${_pkgver}.tar.gz"
  "${pkgname}.conf"
  "${pkgname}.service"
  "${pkgname}.sysusers"
)

sha512sums=('ae727b723ff434072d665d6458101b6fd0be42926daf4871da5c76651f76dd8f08942c4d260095d83482329af8b1aaaa2ee3ecdc2e058582ee5dab8df4f41c0e'
            '5ec5300dac7db23ac3a9178106304f309a8cc5e472e96d9fc452fae2f78c7272f3cb6df20b318ec5151997872dc1226191e406ed0862920cf746a2acff4e7866'
            '1ea6327e9fc8593e8880676d582709fbb15aa63dbc3b4495f1ebc1ec71ac6658267f270256601c53515a5d9396f8a7c441c3deab527c1d533b2c76e52abc9b75'
            '4e938dda326ab2549d4f3076f72198f5d23ced3a46f1994a5c215fc5848b64a1737e9061bb75888f5acf81cede68949fc03a144a5fdf8da6e51800ebc7223d6b')

prepare() {
  cd "$pkgname-$_pkgver"

  go mod vendor
}

build() {
  cd "$pkgname-$_pkgver"

  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"

  go build -v -o "${pkgname}"
}

package() {
  cd "$srcdir"
  install -Dm644 "${pkgname}.conf" "${pkgdir}/etc/${pkgname}.conf"
  install -Dm644 "${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
  install -Dm644 "${pkgname}.sysusers" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"

  cd "$srcdir/$pkgname-$_pkgver"
  install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
}
