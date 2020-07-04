# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=gitin
pkgver=0.2.3
_lg2ver=0.27.8
pkgrel=3
pkgdesc="Commit/branch/workdir explorer for git"
arch=('x86_64')
url="https://github.com/isacikgoz/gitin"
license=('BSD')
depends=("libgit2=1:$_lg2ver" "libgit2-glib=$_lg2ver")
makedepends=('go' 'git' 'cmake')
source=("$pkgname-$pkgver.tar.gz::https://github.com/isacikgoz/$pkgname/archive/v$pkgver.tar.gz"
        "libgit2-$_lg2ver.tar.gz::https://github.com/libgit2/libgit2/archive/v$_lg2ver.tar.gz")
sha256sums=('65bc6f56ef9c8527763ef72d4a334238dbcb60ce2962c319af169236f136b39e'
            '8313873d49dc01e8b880ec334d7430ae67496a89aaa8c6e7bbd3affb47a00c76')

prepare() {
	# Prevent creation of a `go` directory in one's home.
	# Sometimes this directory cannot be removed with even `rm -rf` unless
	# one becomes root or changes the write permissions.
	export GOPATH="$srcdir/gopath"
	go clean -modcache

	mkdir -p "$GOPATH/src"
	ln -s "$srcdir/libgit2-$_lg2ver" "$GOPATH/src/libgit2-$_lg2ver"
	ln -s "$srcdir/$pkgname-$pkgver" "$GOPATH/src/$pkgname-$pkgver"

	cd "$GOPATH/src/libgit2-$_lg2ver"
	git submodule update --init
}

build() {
	cd "$GOPATH/src/libgit2-$_lg2ver/build"
	cmake -B build -S . \
		-DTHREADSAFE=ON \
		-DBUILD_CLAR=OFF \
		-Wno-dev
	make -C build

	cd "$GOPATH/src/$pkgname-$pkgver"
	go build \
		-trimpath \
		-buildmode=pie \
		-mod=readonly \
		-modcacherw \
		-ldflags "-extldflags \"${LDFLAGS}\"" \
		-o "$pkgname"

	# Clean now to ensure makepkg --clean works
	go clean -modcache
}

package() {
	cd "$GOPATH/src/$pkgname-$pkgver"
	install -Dm755 "$pkgname" -t "$pkgdir/usr/bin"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
