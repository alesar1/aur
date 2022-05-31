# Maintainer: Kyle Shiue <shiue.kyle@gmail.com>
# Maintainer: Ilesh Thiada <ileshkt@gmail.com>
pkgname=ferium-bin
_pkgname=ferium
pkgver=4.1.0
pkgrel=3
pkgdesc="Fast and multi-source CLI program for managing Minecraft mods and modpacks from Modrinth, CurseForge, and Github Releases"
arch=("x86_64")
depends=("gcc-libs" "bzip2")
provides=("ferium")
conflicts=("ferium-gui-bin")
url="https://github.com/gorilla-devs/ferium"
license=('MPL2')
source=("$_pkgname-$pkgver-$pkgrel.zip::https://github.com/gorilla-devs/ferium/releases/download/v$pkgver/ferium-linux-gnu-nogui.zip")
sha256sums=('cf67105dd2a072518a4fe72cfba30552149fa3c8206943718336188fb4438b92')

package() {
	cd "$srcdir"
	install -Dm755 "ferium" "$pkgdir/usr/bin/ferium"
	chmod +x ferium
	./ferium complete bash | install /dev/stdin "${pkgdir}"/usr/share/bash-completion/completions/ferium
	./ferium complete zsh | install -Dm644 /dev/stdin "${pkgdir}"/usr/share/zsh/site-functions/_ferium
	./ferium complete fish | install -Dm644 /dev/stdin "${pkgdir}"/usr/share/fish/vendor_completions.d/packwiz.fish
}
