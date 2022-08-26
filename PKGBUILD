# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Joost Bremmer <contact at madeofmagicandwires dot online>
# Contributor: Bogdan <d0xi at inbox dot ru>
pkgname=cheat
pkgver=4.3.2
pkgrel=1
pkgdesc="Allows you to create and view interactive cheatsheets on the command-line"
arch=('x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/cheat/cheat"
license=('MIT' 'CC0 1.0 Universal')
makedepends=('auth-tarball-from-git' 'git' 'go' 'pandoc')
optdepends=('bash-completion: for bash completions'
            'fzf: Fuzzy Finder integration for bash-completion')
conflicts=("python-$pkgname")
replaces=("python-$pkgname")
backup=("etc/$pkgname/conf.yml")
_commit=9571457c230c360090ad73c1ae18af8b0b913fad
source=("$pkgname-$pkgver.tar.gz::$url/archive/refs/tags/$pkgver.tar.gz"
        'chris.pgp' # Christopher Allen Lane <chris@chris-allen-lane.com>
        'conf.yml'
        "git+https://github.com/cheat/cheatsheets.git#commit=$_commit"
        "cheatsheets-$pkgver-LICENSE::https://raw.githubusercontent.com/cheat/cheatsheets/master/.github/LICENSE.txt")
sha256sums=('ea40ebfef2d126c627e39a4e3c2aaf3a6b9bcf6489992430fb30fb42b13dab16'
            '6318f816e4c8f2e9c34b8dc1855adeff58c1254809b8aa86c2b39ed155f3d2b6'
            '30df814034a3b7146232e195829564baa7c269940b40c81e1caefbbdc83744e8'
            'SKIP'
            'a2010f343487d3f7618affe54f789f5487602331c0a8d03f49e9a7c547cf0499')

prepare() {
  cd "$pkgname-$pkgver"

  auth-tarball-from-git --keyring ../chris.pgp \
    --tag "$pkgver" --prefix "$pkgname-$pkgver" \
    https://github.com/cheat/cheat.git ../"$pkgname-$pkgver.tar.gz"

  export GOPATH="$srcdir/gopath"
  go mod vendor
  go mod tidy
  go mod verify

  mkdir -p build
}

build() {
  cd "$pkgname-$pkgver"
  export GOPATH="$srcdir/gopath"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go generate -v "./cmd/$pkgname"
  go build -v -o build "./cmd/$pkgname"

  # Generate man page
  pandoc -s -t man "doc/$pkgname.1.md" -o "doc/$pkgname.1"

  # Clean module cache for makepkg -C
  go clean -modcache
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 "build/$pkgname" -t "$pkgdir/usr/bin/"
  install -Dm644 "scripts/$pkgname.bash" \
    "$pkgdir/usr/share/bash-completion/completions/$pkgname"
  install -Dm644 "scripts/$pkgname.fish" -t "$pkgdir/usr/share/fish/completions/"

  # Conflicts with zsh-suggestions, copy or symlink from the doc folder
#  install -Dm644 "scripts/$pkgname.zsh" "$pkgdir/usr/share/zsh/site-functions/_$pkgname"
  install -Dm644 "scripts/$pkgname.zsh" "$pkgdir/usr/share/doc/$pkgname/_$pkgname"

  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/$pkgname-LICENSE"
  install -Dm644 "doc/$pkgname.1" -t "$pkgdir/usr/share/man/man1/"

  install -d "$pkgdir/usr/share/$pkgname/cheatsheets/community"
  find "$srcdir/cheatsheets" \
    -maxdepth 1 \
    -type f \
    -perm 644 \
    -exec \
      install -m644 "{}" \
      "$pkgdir/usr/share/$pkgname/cheatsheets/community/" \;
  install -Dm644 "$srcdir/conf.yml" -t "$pkgdir/etc/$pkgname/"
  install -Dm644 "$srcdir/cheatsheets-$pkgver-LICENSE" \
    "$pkgdir/usr/share/licenses/$pkgname/cheatsheets-LICENSE"
}
