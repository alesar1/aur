# Maintainer: Tom Nguyen <tom81094@gmail.com>

pkgname=masterpassword-cli-c-git
pkgver=20170508.r1181.fcbb9376
pkgrel=1
pkgdesc="CLI version of Master Password. (git-version)"

arch=('any')
url="https://github.com/Lyndir/MasterPassword"
license=('GPL3')

optdepends=(
  'xclip: copy password to clipboard'
)
makedepends=(
  'gcc'
  'git'
  'libsodium'
  'openssl'
)
conflicts=(
  'masterpassword-cli'
  'masterpassword-cli-git'
)

source=("${pkgname%-git}::git+https://github.com/Lyndir/MasterPassword.git#branch=master")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  printf "%s.r%s.%s" "$(date +%Y%m%d)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${pkgname%-git}/platform-independent/cli-c"
  targets="mpw" ./build
}

package() {
  cd "${pkgname%-git}"
  install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/${pkgname%-git}/LICENSE"

  cd "platform-independent/cli-c"
  /usr/bin/install -Dm755 "mpw" "$pkgdir/usr/bin/mpw"
}
