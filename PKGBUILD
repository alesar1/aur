# Maintainer: HurricanePootis <hurricanepootis@protonmail.com>
pkgname=creators-tf-launcher
pkgver=0.2.7
pkgrel=1
pkgdesc="The community launcher from the Creators.TF project for Team Fortress 2"
arch=('x86_64')
url="https://github.com/CreatorsTF/Creators.TF-Community-Launcher"
license=('MIT')
depends=('libnotify' 'libxss' 'nspr' 'nss' 'gtk3' 'c-ares' 'ffmpeg' 'libevent' 'libnghttp2' 'libxslt' 'minizip' 're2' 'snappy')
makedepends=('npm' 'patch')
source=("https://github.com/ampersoftware/Creators.TF-Community-Launcher/archive/refs/tags/$pkgver.tar.gz"
	'patch.patch')
sha512sums=('afbf3dc0fbbb1c70a808944640c05fd5a8cd0cac6ff6ac0e6d14e748ebf45b18bcf57b4184beb36b7640a9049c373a7ac90c6a964a9174fad701c1598ebecdf2'
            'e2de8060533296ee716c508e11cb46baa2e2657449e6aa0db5bdda3296ced63cfee04d1a7e63b1f2b26feb636af16f93bbbbd2e12acc9a81d86ac4e7e06e887d')
replaces=('creators-tf-launcher-bin')

prepare(){
	cd "$srcdir/Creators.TF-Community-Launcher-$pkgver"
	cp "$srcdir/patch.patch" ./
	patch -p1 < patch.patch
}

build(){
	cd "$srcdir/Creators.TF-Community-Launcher-$pkgver"
	npm install
	npm run compileTs
	npm run compileSass
	npm run buildLinux
}

package(){
	cd "$srcdir/Creators.TF-Community-Launcher-$pkgver/dist"
	cp 'creators-tf-launcher_'$pkgver'_amd64.deb' "$srcdir"'/creators-tf-launcher_'$pkgver'_amd64.deb'
	cd "$srcdir"
	ar x 'creators-tf-launcher_'"$pkgver"'_amd64.deb'
	tar xpf data.tar.xz
	mkdir -p "$pkgdir/opt"
	mkdir -p "$pkgdir/opt/Creators.TF Launcher"	
	cp -a "$srcdir/opt/Creators.TF Launcher/." "$pkgdir/opt/Creators.TF Launcher"
	
	install -Dm644 "${srcdir}/usr/share/applications/creators-tf-launcher.desktop" \
        "${pkgdir}/usr/share/applications/creators-tf-launcher.desktop"
	
	install -Dm644 "${srcdir}/usr/share/icons/hicolor/0x0/apps/creators-tf-launcher.png" \
        "${pkgdir}/usr/share/icons/hicolor/symbolic/apps/creators-tf-launcher.png"

	install -Dm644 "${srcdir}/usr/share/doc/creators-tf-launcher/changelog.gz" \
	"${pkgdir}/usr/share/doc/creators-tf-launcher/changelog.gz"

}
