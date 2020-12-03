# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Joost Bremmer <contact at madeofmagicandwires dot online>
# Contributor: Bogdan <d0xi at inbox dot ru>
pkgname=cheat
pkgver=4.2.0
pkgrel=2
pkgdesc="Allows you to create and view interactive cheatsheets on the command-line"
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h')
url="https://github.com/cheat/cheat"
license=('MIT' 'CC0 1.0 Universal')
makedepends=('go' 'git' 'pandoc')
optdepends=('bash-completion: for bash completions'
            'fzf: Fuzzy Finder integration for bash-completion')
conflicts=("python-$pkgname" "$pkgname-bash-git")
replaces=("python-$pkgname")
backup=("etc/$pkgname/conf.yml")
_commit='92db692c0fd6348793ee0641cb63d08977be90fd'
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz"
        'conf.yml'
        'git+https://github.com/cheat/cheatsheets.git'
        "https://github.com/cheat/cheat/raw/$pkgver/LICENSE.txt")
sha256sums=('23c3c30fe1ad63916718eef534dcef22c0ae607695f74860180304c5cde3ea49'
            'a0aa691a318219d048107b835fe0e8cddfa734618fc5ccbb800b5bb463e00ea5'
            'SKIP'
            '5eaa85b8023f915629de53c3604015ab5b23bed404afa9e551ab44e0bc46dde3')

prepare() {
	export GOPATH="$srcdir/gopath"
	go clean -modcache
}

build() {
	cd "$pkgname-$pkgver"
	export CGO_CPPFLAGS="${CPPFLAGS}"
	export CGO_CFLAGS="${CFLAGS}"
	export CGO_CXXFLAGS="${CXXFLAGS}"
	export CGO_LDFLAGS="${LDFLAGS}"
	export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
	go build -v "./cmd/$pkgname"

	# Generate man page
	pandoc -s -t man "doc/$pkgname.1.md" -o "doc/$pkgname.1"
	gzip "doc/$pkgname.1"

	# Clean mod cache for makepkg -C
	go clean -modcache
}

package() {
	cd "$pkgname-$pkgver"
	install -Dm755 "$pkgname" -t "$pkgdir/usr/bin"
	install -Dm755 "scripts/$pkgname.bash" \
		"$pkgdir/usr/share/bash-completion/completions/$pkgname"
	install -Dm755 "scripts/$pkgname.fish" -t "$pkgdir/usr/share/fish/completions"

	# Conflicts with zsh-suggestions, copy or symlink from the doc folder
#	install -Dm755 "scripts/$pkgname.zsh" "$pkgdir/usr/share/zsh/site-functions/_$pkgname"
	install -Dm755 "scripts/$pkgname.zsh" "$pkgdir/usr/share/doc/$pkgname/_$pkgname"

	install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/$pkgname-LICENSE"
	install -Dm644 "doc/$pkgname.1.gz" -t "$pkgdir/usr/share/man/man1"

	install -dm755 "$pkgdir/usr/share/$pkgname/cheatsheets/community"
	find "$srcdir/cheatsheets" \
		-maxdepth 1 \
		-type f \
		-perm 644 \
		-exec \
			install -m644 "{}" \
			"$pkgdir/usr/share/$pkgname/cheatsheets/community/" \;
	install -Dm644 "$srcdir/conf.yml" -t "$pkgdir/etc/$pkgname"
	install -Dm644 "$srcdir/LICENSE.txt" \
		"$pkgdir/usr/share/licenses/$pkgname/cheatsheets-LICENSE"
}
