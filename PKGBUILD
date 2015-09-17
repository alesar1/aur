# ex-Maintainer: Evan Anderson <evananderson@thelinuxman.us>
# Maintainer = Anty <anty_fab at hotmail dot fr>

_gitname=grub-btrfs
pkgname=$_gitname-git
pkgver=v1.6.r6.g252a637-1
pkgrel=2
pkgdesc="grub-btrfs, add support for btrfs snapshots into grub menu"
arch=('any')
url="https://github.com/Antynea/grub-btrfs"
license=('GPL3')
depends=('btrfs-progs' 'grub')
makedepends=('git')
conflicts=('grub-btrfs')
backup=('etc/grub.d/41_snapshots-btrfs')
source=('git+https://github.com/Antynea/grub-btrfs.git')
#source=('git+https://github.com/Antynea/grub-btrfs.git#branch=v1.xx')
#source=('git+https://github.com/Antynea/grub-btrfs.git#branch=v0.xx')
md5sums=('SKIP')

pkgver() {
	cd $_gitname/
	# ( set -o pipefail
		# git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		# printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
    # )
	( set -o pipefail
		git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
    )
}

package() {
	cd "$_gitname"
	install -Dm 755 "41_snapshots-btrfs" "${pkgdir}/etc/grub.d/41_snapshots-btrfs"
	install -Dm 644 "localisation/fr/grub-btrfs-git.mo" "${pkgdir}/usr/share/locale/fr/LC_MESSAGES/grub-btrfs-git.mo"
}
