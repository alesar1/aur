# Maintainer: Jingbei Li <i@jingbei.li>
pkgname=devtools-qemu
pkgver=12.3c44e3c
pkgrel=1
pkgdesc='QEMU based cross-build tools for Arch Linux ARM package maintainers'
arch=('x86_64')
url='https://aur.archlinux.org/packages/devtools-qemu'
license=('GPL')
depends=('archlinuxarm-keyring' 'binfmt-qemu-static' 'devtools' 'qemu-user-static')
makedepends=('git')
source=("$pkgname::git+https://github.com/arch4edu/devtools-arch4edu-extra.git"
	"archbuild-qemu.patch"
)
sha256sums=('SKIP'
            '0d8549497ff97e2d11ca73c3d6463e134ce590cb7767b76b3c54eceab19c831e')

pkgver() {
	cd "$srcdir/$pkgname"
	echo "$(pacman -Q devtools | cut -d' ' -f2 | cut -d- -f1).$(git rev-list --count master).$(git rev-parse --short master)"
}

build() {
	cd $srcdir/$pkgname

	cp /usr/bin/archbuild archbuild-qemu
	patch archbuild-qemu < $srcdir/archbuild-qemu.patch

	for i in armv7h aarch64
	do
		sed -i '/^Include/s/$/.alarm/' pacman-extra-$i.conf
	done
}

package() {
	mkdir -p $pkgdir/usr/bin
	mkdir -p $pkgdir/usr/share/devtools
	mkdir -p $pkgdir/etc/pacman.d

	cp $srcdir/$pkgname/archbuild-qemu $pkgdir/usr/bin
	cp $srcdir/$pkgname/mirrorlist $pkgdir/etc/pacman.d/mirrorlist.alarm

	for i in armv7h aarch64
	do
		cp $srcdir/$pkgname/pacman-extra-$i.conf $pkgdir/usr/share/devtools/
		cp $srcdir/$pkgname/makepkg-$i.conf $pkgdir/usr/share/devtools/
		ln -sf /usr/bin/archbuild-qemu $pkgdir/usr/bin/extra-$i-build
	done
}
