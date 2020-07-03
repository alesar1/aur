# Maintainer: ml <ml@visu.li>
# TODO systemd service
pkgname=keys-pub
pkgver=0.0.48
pkgrel=1
pkgdesc='keys.pub CLI client and service (keys, keysd)'
arch=('x86_64' 'i686')
url='https://keys.pub/'
license=('MIT')
depends=('libfido2')
makedepends=('git' 'go')
optdepends=('org.freedesktop.secrets: storing secrets')
source=("https://github.com/keys-pub/keys-ext/archive/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('032428f4c0e7c6a31bc0da05229ef23b820ff55bbc0583561e3acf36db78425b')

prepare() {
  # lots of the components fetch an older version of themselves. not gonna use the replace directive
  # on all of them. this is an upstream issue
  cd "keys-ext-${pkgver}/service"
  sed -i 's#// \?\(replace github.com/keys-pub/keys-ext\)#\1#g' go.mod
  go mod tidy

  cd ../auth/rpc
  echo 'replace github.com/keys-pub/keys-ext/auth/fido2 => ../fido2' >> go.mod
  go mod tidy
}

build() {
  local _commit=$(bsdcat "${pkgname}-${pkgver}.tar.gz" | git get-tar-commit-id)
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

  cd service
  go build -o .. -ldflags "${x[*]/#/-X=}" ./{keys,keysd}

  cd ../auth/rpc
  go build -o ../../fido2.so -buildmode=plugin ./plugin
}

check() {
  cd "keys-ext-${pkgver}/service"
  go test -failfast -short ./...
  #cd ../auth/rpc
  #go test -failfast -short ./...
}

package() {
  cd "keys-ext-${pkgver}"
  install -Dm755 keys keysd -t "${pkgdir}/usr/bin"
  install -m644 fido2.so -t "${pkgdir}/usr/bin"
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
