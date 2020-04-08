# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Joost Bremmer <contact at madeofmagicandwires dot online>
# Contributor: Bogdan <d0xi at inbox dot ru>
# Contributor: Quan Guo <guotsuan@gmail.com>
pkgname=cheat-git
pkgver=3.9.0.r0.gc4dd3b5
pkgrel=2
pkgdesc="Allows you to create and view interactive cheatsheets on the command-line"
arch=('arm' 'armv6h' 'armv7h' 'x86_64')
url="https://github.com/cheat/cheat"
license=('MIT' 'CC0 1.0 Universal')
makedepends=('git' 'go-pie' 'pandoc')
optdepends=('fzf: for Fuzzy Finder integration'
            'bash-completion: for bash completions')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}" "${pkgname%-git}-bash-git" "python-${pkgname%-git}")
backup=("etc/$pkgname/conf.yml")
source=('git+https://github.com/cheat/cheat.git'
        'conf.yml'
        'git+https://github.com/cheat/cheatsheets.git')
sha256sums=('SKIP'
            'efffbe20041efc3d49ffe596ab5abe60a10adf70219c2ddecdf1caf350972212'
            'SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {

	# Add /etc/cheat/ to config file path
	cd "$srcdir/${pkgname%-git}"
	sed -i '43 i\
			path.Join("/etc/cheat/conf.yml"),' internal/config/paths.go
}

build() {
	cd "$srcdir/${pkgname%-git}"
	GOOS=linux \
	GOARCH=$(go env GOHOSTARCH) \
	go build \
		-v \
		-trimpath \
		-buildmode=pie \
		-gcflags "all=-trimpath=$srcdir" \
		-asmflags "all=-trimpath=$srcdir" \
		-ldflags "-extldflags $LDFLAGS" \
		-o "./dist/${pkgname%-git}" "./cmd/${pkgname%-git}"

	# Clean mod cache for makepkg -C
	go clean -modcache

	# Generate man page
	pandoc -s -t man "doc/${pkgname%-git}.1.md" -o "doc/${pkgname%-git}.1"
}

package() {
	cd "$srcdir/${pkgname%-git}"
	install -Dm755 "dist/${pkgname%-git}" -t "$pkgdir/usr/bin"
	install -Dm755 "scripts/${pkgname%-git}.bash" \
		"$pkgdir/usr/share/bash-completion/completions/${pkgname%-git}"
	install -Dm755 "scripts/${pkgname%-git}.fish" -t \
		"$pkgdir/usr/share/fish/completions"
#	install -Dm755 "scripts/${pkgname%-git}.zsh" \
#		"$pkgdir/usr/share/zsh/site-functions/_${pkgname%-git}"
	install -Dm644 LICENSE.txt \
		"$pkgdir/usr/share/licenses/${pkgname%-git}/${pkgname%-git}-LICENSE"
	install -Dm644 "doc/${pkgname%-git}.1" -t "$pkgdir/usr/share/man/man1"

	install -dm755 "$pkgdir/usr/share/${pkgname%-git}/cheatsheets/community"
	find "$srcdir/cheatsheets" \
		-maxdepth 1 \
		-type f \
		-perm 644 \
		-exec \
			install -m644 "{}" \
			"$pkgdir/usr/share/${pkgname%-git}/cheatsheets/community/" \;
	install -Dm644 "$srcdir/conf.yml" -t "$pkgdir/etc/${pkgname%-git}"
	install -Dm644 "$srcdir/LICENSE.txt" \
		"$pkgdir/usr/share/licenses/${pkgname%-git}/cheatsheets-LICENSE"
}
