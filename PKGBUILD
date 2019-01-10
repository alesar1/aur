# Maintainer: Lucas Werkmeister <mail@lucaswerkmeister.de>
# Contributor: Dave Reisner <dreisner@archlinux.org>
# Contributor: Reto Brunner <brunnre8@gmail.com>

pkgname=mkosi-git
pkgver=4.r85.g2fcdbfa
pkgrel=1
pkgdesc='Build Legacy-Free OS Images'
arch=('any')
url='https://github.com/systemd/mkosi'
license=('LGPL2.1')
depends=('python')
makedepends=('python-setuptools' 'git' 'pandoc')
optdepends=('dnf: build Fedora or Mageia images'
            'debootstrap: build Debian or Ubuntu images'
            'debian-archive-keyring: build Debian images'
            'ubuntu-keyring: build Ubuntu images'
            'arch-install-scripts: build Arch images'
            'zypper-git: build openSUSE images'
            'gnupg: sign images'
            'xz: compress images with xz'
            'pxz: compress images with xz more efficiently'
            'btrfs-progs: raw_btrfs and subvolume output formats'
            'dosfstools: build bootable images'
            'squashfs-tools: raw_squashfs output format'
            'e2fsprogs: raw_ext4 output format'
            'xfsprogs: raw_xfs output format'
            'tar: tar output format'
            'cryptsetup: add dm-verity partitions'
            # I don’t understand whether ovmf or edk2-ovmf is needed… let’s point to both for now
            'ovmf: run bootable images in QEMU'
            'edk2-ovmf: run bootable images in QEMU'
            'qemu: run bootable images in QEMU'
            'sbsigntools: sign EFI binaries for UEFI SecureBoot')
provides=('mkosi')
conflicts=('mkosi')
source=('git://github.com/systemd/mkosi.git')
md5sums=('SKIP')

pkgver() {
  cd 'mkosi'

  git describe --long | sed '
    # v3-90-gd927f65 (tag - number of commits - g(it)hash)
    s/^v//
    # 3-90-gd927f65
    s/\([^-]*-g\)/r\1/
    # 3-r90-gd927f65
    s/-/./g
    # 3.r90.gd927f65
'
}

build() {
    cd 'mkosi'

    pandoc -s -f markdown -t man mkosi.md -o mkosi.1
    python setup.py build
}

package() {
  cd 'mkosi'

  python setup.py install --skip-build --optimize=1 --root="$pkgdir"
  install -Dm 644 mkosi.1 "$pkgdir/usr/share/man/man1/mkosi.1"
}
