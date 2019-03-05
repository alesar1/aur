## Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>

_pkgbase=ravenna-alsa-lkm
pkgname="${_pkgbase}-dkms"
pkgver=r101.bed468b
pkgrel=1
pkgdesc="A kernel module for ALSA RAVENNA/AES67 Driver"
url="https://bitbucket.org/MergingTechnologies/ravenna-alsa-lkm"
license=("GPL")
arch=('x86_64')
depends=('gcc' 'dkms')
optdepends=(
    'linux-rt-headers: Needed for build the module for Arch kernel'
    'linux-rt-bfq-headers: Needed for build the module for Arch kernel'
    'linux-headers: Needed for build the module for Arch kernel'
	'linux-lts-headers: Needed for build the module for LTS Arch kernel'
	'linux-zen-headers: Needed for build the module for ZEN Arch kernel')
source=("git+https://bitbucket.org/MergingTechnologies/ravenna-alsa-lkm.git" "dkms.conf")
sha256sums=('SKIP' 'ac58fa4f92f946bf4588781c36ff55f7b84ffbc86dab1fd1badb408f55b2bfcf')
install=ravenna-dkms.install

pkgver() {
  cd "$_pkgbase"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"                          
}

package() {
  install -Dm644 dkms.conf "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/dkms.conf"
  cp -dr --no-preserve='ownership' $srcdir/$_pkgbase/driver "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/src"
  cp -dr --no-preserve='ownership' $srcdir/$_pkgbase/common "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/common"
}
