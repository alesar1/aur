# Maintainer: George Rawlinson <grawlinson@archlinux.org>

pkgname=tailwindcss
pkgver=3.0.16
pkgrel=1
pkgdesc="Standalone version of Tailwind CLI"
arch=('x86_64')
url="https://tailwindcss.com"
license=('MIT')
depends=('gcc-libs')
makedepends=('git' 'nodejs-lts-gallium' 'npm')
options=('!strip')
_commit='b1c77d6406e7bb061b8b926a48f0293a778d02dc'
source=("$pkgname::git+https://github.com/tailwindlabs/tailwindcss.git#commit=$_commit")
md5sums=('SKIP')

pkgver() {
  cd "$pkgname"
  git describe --tags | sed 's/^[vV]//'
}

build() {
  cd "$pkgname"

  # build tailwindcss
  npm run prepublishOnly

  cd standalone-cli

  # install dependencies
  npm install

  # generate binary
  npx pkg standalone.js \
    --output dist/tailwindcss-linux-x64 \
    --compress Brotli \
    --targets node16-linux-x64 \
    --no-bytecode \
    --public-packages "*" \
    --public
}

check() {
  cd "$pkgname/standalone-cli"

  npm test
}

package() {
  cd "$pkgname"

  # binary
  install -vDm755 standalone-cli/dist/tailwindcss-linux-x64 "$pkgdir/usr/bin/$pkgname"

  # license
  install -vDm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}
