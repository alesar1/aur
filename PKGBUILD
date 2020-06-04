# Maintainer: ml <ml@visu.li>
# TODO systemd service
pkgname=keys-pub
pkgver=0.0.47
pkgrel=1
pkgdesc='keys.pub CLI client and service (keys, keysd)'
arch=('x86_64' 'i686')
url='https://keys.pub/'
license=('MIT')
depends=('libfido2')
makedepends=('git' 'go' 'gzip')
optdepends=('org.freedesktop.secrets: storing secrets')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/keys-pub/keys-ext/archive/v${pkgver}.tar.gz")
sha256sums=('c9ada22e3bb7424c06838fa299288b5a2506ed7d659a5230ddc1e08a29f66cd2')

prepare() {
  cd "keys-ext-${pkgver}"
  # lots of the components fetch an older version of themselves. not gonna use the replace directive
  # on all of them. this is an upstream issue
  (
    cd auth/rpc
    go mod download
  )
  cd service
  sed -i 's#// \?\(replace github.com/keys-pub/keys-ext\)#\1#g' go.mod
  go mod tidy
}

build() {
  local _commit=$(zcat "${pkgname}-${pkgver}.tar.gz" | git get-tar-commit-id)
  local -a x=(
    main.version="$pkgver"
    main.commit="${_commit:?}"
    main.date="$(date -u -d @${SOURCE_DATE_EPOCH:-$EPOCHSECONDS} +%FT%TZ)"
  )

  cd "keys-ext-${pkgver}"
  export CGO_ENABLED=1
  export CGO_LDFLAGS="$LDFLAGS"
  export CGO_CFLAGS="$CFLAGS"
  export CGO_CPPFLAGS="$CPPFLAGS"
  export CGO_CXXFLAGS="$CXXFLAGS"
  export GOFLAGS='-buildmode=pie -trimpath -modcacherw -mod=readonly'

  (
    cd auth/rpc
    go build -o ../../fido2.so -buildmode=plugin ./plugin
  )
  cd service
  go build -o .. -ldflags "${x[*]/#/-X=}" ./{keys,keysd}
}

check() {
  cd "keys-ext-${pkgver}"
  (
    cd auth/rpc
    go test -failfast -short ./...
  )
  cd service
  go test -short ./...
}

package() {
  cd "keys-ext-${pkgver}"
  install -Dm755 keys keysd -t "${pkgdir}/usr/bin"
  install -m644 fido2.so -t "${pkgdir}/usr/bin"
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
