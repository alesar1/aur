# Maintainer: Det <nimetonmaili g-mail>
# Contributor: Ng Oon-Ee
# Based on nvidia-beta: https://aur.archlinux.org/packages/nvidia-beta/

pkgname=nvidia-beta-all
pkgver=352.30
pkgrel=1
pkgdesc="NVIDIA drivers for all kernels (beta)"
arch=('i686' 'x86_64')
url="http://www.nvidia.com/"
license=('custom:NVIDIA')
depends=("nvidia-utils-beta=$pkgver" 'libgl')
makedepends=('linux-headers' 'pacman>=4.2.0')
provides=('nvidia')
conflicts=('nvidia-96xx' 'nvidia-173xx' 'nvidia')
options=('!strip')
install=$pkgname.install

# Installer name
case "$CARCH" in
  i686)   _pkg="NVIDIA-Linux-x86-$pkgver" ;;
  x86_64) _pkg="NVIDIA-Linux-x86_64-$pkgver-no-compat32" ;;
esac

# Source
source_i686=("http://us.download.nvidia.com/XFree86/Linux-x86/$pkgver/NVIDIA-Linux-x86-$pkgver.run")
source_x86_64=("http://us.download.nvidia.com/XFree86/Linux-x86_64/$pkgver/NVIDIA-Linux-x86_64-$pkgver-no-compat32.run")
md5sums_i686=('7e59d84eafe2482b2f02df692b9168d5')
md5sums_x86_64=('135dd90db609cecad8e74bde0054cf6f')

# Auto-detect patches (e.g. nvidia-linux-4.1.patch)
for _patch in $(ls "$startdir"/*.patch 2>/dev/null); do
  source+=("$_patch")
  md5sums+=('SKIP')
done

prepare() {
  # Remove previous builds
  if [[ -d $_pkg ]]; then
    rm -rf $_pkg
  fi

  # Extract
  msg2 "Self-Extracting $_pkg.run..."
  sh $_pkg.run -x
  cd $_pkg

  # Loop for all kernels
  for _kernel in $(cat /usr/lib/modules/extramodules-*/version); do
    # Use separate source directories
    cp -r kernel kernel-$_kernel

    # Patch?
    for _patch in $(ls "$srcdir"/*.patch 2>/dev/null); do
      # Patch version
      _major_patch=$(echo $_patch | grep -Po "\d+\.\d+")
        
      # Cd in place
      cd kernel-$_kernel

      # Check version
      if (( $(vercmp $_kernel $_major_patch) >= 0 )); then
        msg2 "Applying ${_patch##*/} for $_kernel..."
        patch -p2 -i "$_patch"
      fi
      
      # Return
      cd ..
    done
  done
}

build() {
  # Build for all kernels
  for _kernel in $(cat /usr/lib/modules/extramodules-*/version); do
    cd "$srcdir"/$_pkg/kernel-$_kernel

    # Main module
    msg2 "Building Nvidia module for $_kernel..."
    make SYSSRC=/usr/lib/modules/$_kernel/build module

    # Unified memory: http://devblogs.nvidia.com/parallelforall/unified-memory-in-cuda-6/
    if [[ $CARCH = x86_64 ]]; then
      cd uvm
      msg2 "Building Unified memory module for $_kernel..."
      make SYSSRC=/usr/lib/modules/$_kernel/build module
    fi
  done
}

package() {
  # Install for all kernels
  for _extramod in $(find /usr/lib/modules/extramodules-*/version -printf '%h\n'); do
    _kernel=$(cat $_extramod/version)

    # Install
    install -Dm644 $_pkg/kernel-$_kernel/nvidia.ko \
           "$pkgdir"/$_extramod/nvidia.ko

    # Unified Memory
    if [[ $CARCH = x86_64 ]]; then
      install -Dm644 $_pkg/kernel-$_kernel/uvm/nvidia-uvm.ko \
            "$pkgdir/$_extramod/nvidia-uvm.ko"
    fi

    # Compress
    gzip "$pkgdir"/$_extramod/nvidia*.ko
  done

  # Blacklist Nouveau
  install -d "$pkgdir"/usr/lib/modprobe.d/
  echo "blacklist nouveau" >> "$pkgdir"/usr/lib/modprobe.d/nvidia.conf
}