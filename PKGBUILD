# Maintainer: Amir Zarrinkafsh <nightah at me dot com>
pkgname=authelia-git
_pkgname=authelia
pkgver=4.29.2.r8.g40a26c96
pkgrel=1
pkgdesc="The Cloud ready multi-factor authentication portal for your Apps."
arch=('x86_64' 'aarch64' 'armv7h')
url="https://github.com/authelia/authelia"
license=('Apache-2.0')
makedepends=(
  'gcc'
  'git'
  'go'
  'nodejs'
  'yarn'
)
provides=('authelia')
conflicts=(
  'authelia'
  'authelia-bin'
)
backup=('etc/authelia/configuration.yml')

source=("$_pkgname::git+https://github.com/$_pkgname/$_pkgname.git#branch=master")

sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  export GOPATH="$srcdir/gopath" PATH="$PATH:$srcdir/gopath/bin"
  cd "$srcdir/$_pkgname/web"
  yarn install --frozen-lockfile
  INLINE_RUNTIME_CHUNK=false yarn build
  rm -rf ../internal/server/public_html
  mv build ../internal/server/public_html
  cd ..
  cp -R api internal/server/public_html/
  sed -i "s/__BUILD_TAG__/master/" cmd/authelia/constants.go
  sed -i "s/__BUILD_COMMIT__/$(git rev-parse HEAD)/" cmd/authelia/constants.go
  go build -ldflags '-w' -trimpath -o authelia cmd/authelia/*.go
}

package() {
  install -Dm644 "$srcdir/$_pkgname/$_pkgname.service" "$pkgdir/usr/lib/systemd/system/$_pkgname.service"
  install -Dm700 "$srcdir/$_pkgname/config.template.yml" "$pkgdir/etc/$_pkgname/configuration.yml"
  install -Dm755 "$srcdir/$_pkgname/$_pkgname" "$pkgdir/usr/bin/$_pkgname"
}
