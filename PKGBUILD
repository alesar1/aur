# Maintainer: Rohit Goswami <rohit.goswami@aol.com>
# Maintainer: Anton Kudelin <kudelin@protonmail.com>
# Contributor: eolianoe <eolianoe [at] gmail [DoT] com>

pkgname=nvhpc
_REL_YEAR=2021
_CUDA_VER=11.2
pkgver=21.1
pkgrel=1
pkgdesc='NVIDIA HPC SDK'
arch=('x86_64')
url="https://developer.nvidia.com/hpc-sdk"
license=('custom')
depends=('numactl' 'java-runtime')
makedepends=('bash')
replaces=('pgi-compilers')
conflicts=('pgi-compilers')
_pkgname="${pkgname}_${_REL_YEAR}_${pkgver//.}_Linux_${arch}_cuda_${_CUDA_VER}"
source=("https://developer.download.nvidia.com/hpc-sdk/$pkgver/$_pkgname.tar.gz"
        "nvhpc.sh")
sha256sums=('e021bb3d99873613edb9dba93a2e19e9a13de42349ee4b4775cd4d09af89d379'
            'b4066e52abf7ae524f4dce64bb534ca7c77c3d5371d61d8e73d82fd648fad746')
options=(!strip)

package() {
  cd "$srcdir/$_pkgname"
  export NVHPC_SILENT=true
  export NVHPC_INSTALL_DIR="$pkgdir/opt/nvidia"
  bash ./install

  # Remove references to $pkgdir from module files
  cd "$pkgdir/opt/nvidia/modulefiles"
  find . -type f -exec sed -i "s@$pkgdir@@g" {} \;

  # Install license
  cd "$srcdir/$_pkgname/install_components/Linux_$arch/$pkgver/compilers/license"
  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"

  # Install script to set path
  install -Dm755 "$srcdir/$pkgname.sh" "$pkgdir/etc/profile.d/$pkgname.sh"
}
