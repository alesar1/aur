# Maintainer: Lukasz Marianski <lmarianski at protonmail dot com>
pkgname=powercord-electron-git
_pkgname=${pkgname%-electron-*}
pkgver=r1332.ea8c01ea
pkgrel=1
pkgdesc="A lightweight discord client mod focused on simplicity and performance."
arch=('any')
url="https://github.com/powercord-org/powercord"
license=('custom:Porkord')
groups=()
depends=('electron13' 'discord-canary-electron-bin')
makedepends=('git' 'npm')
provides=("$_pkgname")
conflicts=("$_pkgname")
replaces=()
backup=()
options=()
install=
_branch="v2"
source=('git+https://github.com/powercord-org/powercord.git' 
		'powercord.sh'
		"powercord.desktop"
		"powercord.png"
		"$_pkgname.patch"
		"$_pkgname-themes.patch"
		"$_pkgname-plugins.patch"
		"$_pkgname-updater.patch")
noextract=()
md5sums=('SKIP'
         '6b8129c94d70ec9e565479e9f1da30fe'
         'ed7e42f11938c61e00c8c07cd1a96427'
         '567d9d8abddefa0417035759348230d1'
         '01743ddc5e6db17c72df762d6b7e0b48'
         'd2a25c91f0f31b461756b1204c5c5318'
         '29cd0b6844de7fb09aa26d8923fe749c'
         '4370ed3647d62b1f1cb0e791d960f253')

pkgver() {
	cd "$srcdir/$_pkgname"

	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/$_pkgname"

	patch -p1 -i "$srcdir/$_pkgname.patch"
	patch -p1 -i "$srcdir/$_pkgname-themes.patch"
	patch -p1 -i "$srcdir/$_pkgname-updater.patch"

	sed -i "s:@PKG_UPSTREAM@:powercord-org/powercord:;s:@PKG_BRANCH@:${_branch}:;s:@PKG_REVISION@:$(git rev-parse makepkg):" src/Powercord/plugins/pc-updater/index.js

	# Comment out XDG plugins patch if it breaks a plugin
	# Some can be fixed by symlinking
	# ln -s /usr/share/powercord/src/Powercord/plugins/pc-<name of module> ~/.local/share/powercord/plugins/
	# look at error/stack trace to figure out name of module
	patch -p1 -i "$srcdir/$_pkgname-plugins.patch"
}

build() {
	cd "$srcdir/$_pkgname"

	npm install --cache "${srcdir}/npm-cache" --only=prod
}

check() {
	cd "$srcdir/$_pkgname"
}

package() {
	cd "$srcdir/$_pkgname"
	
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm755 $srcdir/powercord.sh "$pkgdir/usr/bin/powercord" 

	install -dm755 $pkgdir/usr/share/powercord

	rm -rf test LICENSE README.md release.sh jsconfig.json
	cp -r * $pkgdir/usr/share/powercord

	chmod -R u+rwX,go+rX,go-w $pkgdir/usr/share/powercord

	install -dm755 $pkgdir/usr/share/powercord/app

	echo '{"main":"index.js","name":"discord"}' > $pkgdir/usr/share/powercord/app/package.json
	echo 'require(`../src/patcher.js`)' > $pkgdir/usr/share/powercord/app/index.js

	install -D "$srcdir/powercord.png" "$pkgdir/usr/share/pixmaps/$_pkgname.png"
	install -D "$srcdir/powercord.desktop" "$pkgdir/usr/share/applications/$_pkgname.desktop"

	echo "Use the 'powercord' command to launch discord with powercord loaded"
	echo "also, please report bugs/errors to the AUR package page."
}
