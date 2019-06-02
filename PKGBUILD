# Maintainer: Lucas Werkmeister <mail@lucaswerkmeister.de>
# Contributor: Dave Reisner <dreisner@archlinux.org>

pkgname=mkosi
pkgver=5
pkgrel=1
pkgdesc='Build Legacy-Free OS Images'
arch=('any')
url='https://github.com/systemd/mkosi'
license=('LGPL2.1')
depends=('python')
makedepends=('python-setuptools')
optdepends=('dnf: build Fedora or Mageia images'
            'debootstrap: build Debian or Ubuntu images'
            'debian-archive-keyring: build Debian images'
            'ubuntu-keyring: build Ubuntu images'
            'arch-install-scripts: build Arch images'
            'zypper-git: build openSUSE images'
            'gnupg: sign images'
            'xz: compress images with xz'
            'btrfs-progs: raw_btrfs and subvolume output formats'
            'dosfstools: build bootable images'
            'squashfs-tools: raw_squashfs output format'
            'tar: tar output format'
            'cryptsetup: add dm-verity partitions'
            'edk2-ovmf: run bootable images in QEMU'
            'qemu: run bootable images in QEMU'
            'sbsigntools: sign EFI binaries for UEFI SecureBoot')
source=("https://github.com/systemd/mkosi/archive/v$pkgver.tar.gz")
sha256sums=('88e995dac8dfc665d2e741bd24f94c5aeb7f11fc79f2cd8560001f68a86a4bda')

package() {
  cd "mkosi-$pkgver"
  python setup.py install --root="$pkgdir"
}
