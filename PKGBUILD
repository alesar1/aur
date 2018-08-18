# Maintainer: Det <nimetonmaili g-mail>
# Contributors: Ng Oon-Ee, Dan Vratil
# Based on [extra]'s nvidia: https://www.archlinux.org/packages/extra/x86_64/nvidia/

pkgname=nvidia-beta
pkgver=396.51
pkgrel=1
pkgdesc="NVIDIA driver for Arch's official 'linux' package (beta version)"
arch=('x86_64')
url="http://www.nvidia.com/"
license=('custom:NVIDIA')
depends=('linux' "nvidia-utils-beta>=$pkgver" 'libgl')
makedepends=('linux-headers')
provides=("nvidia=$pkgver")
conflicts=('nvidia-96xx' 'nvidia-173xx' 'nvidia')
options=('!strip')
install=$pkgname.install
_pkg="NVIDIA-Linux-x86_64-$pkgver-no-compat32"
source=("http://us.download.nvidia.com/XFree86/Linux-x86_64/$pkgver/$_pkg.run")
md5sums=('d3556202869f629e0c251b59ad4b9bee')
_extramodules=extramodules-ARCH

# Patch
#source+=('linux-4.11.patch')
#md5sums+=('cc8941b6898d9daa0fb67371f57a56b6')

# Auto-add *.patch files from $startdir to source=()
for _patch in $(find "$startdir" -maxdepth 1 -name '*.patch' -printf "%f\n"); do
  # Don't duplicate already listed ones
  if [[ ! " ${source[@]} " =~ " $_patch " ]]; then  # https://stackoverflow.com/a/15394738/1821548
    source+=("$_patch")
    md5sums+=('SKIP')
  fi
done

prepare() {
  # Remove previous builds
  [[ -d $_pkg ]] && rm -rf $_pkg

  # Extract
  msg2 "Self-Extracting $_pkg.run..."
  sh $_pkg.run -x
  cd $_pkg

  # Kernel version (e.g. 4.15.0-1-ARCH)
  _kernel=$(cat /usr/lib/modules/$_extramodules/version)

  # Loop patches (linux-4.15.patch, lol.patch, ...)
  for _p in $(printf -- '%s\n' ${source[@]} | grep .patch); do  # https://stackoverflow.com/a/21058239/1821548
    # Patch version (4.15, "", ...)
    _patch=$(echo $_p | grep -Po "\d+\.\d+")

    # Compare versions
    if (( $(vercmp "$_kernel" "$_patch") >= 0 )); then
      msg2 "Applying $_p..."
      patch -p1 -i "$srcdir"/$_p
    else
      msg2 "Skipping $_p..."  # List these, instead of ignoring silently
    fi
  done
}

build() {
  # Version of 'linux'
  _kernel=$(cat /usr/lib/modules/$_extramodules/version)

  # Build module
  cd $_pkg/kernel
  msg2 "Building Nvidia module for $_kernel..."
  make SYSSRC=/usr/lib/modules/$_kernel/build module
}

package() {
  # Nvidia kernel module; provides low-level access to your NVIDIA hardware for the other components. Generally
  # loaded into the kernel when the X server is started, to be used by the X driver and OpenGL. Consists of two
  # pieces: the binary-only core, and a kernel interface that must be compiled specifically for your kernel version,
  # because the Linux kernel doesn't have a consistent binary interface like the X server.
  install -Dm644 $_pkg/kernel/nvidia.ko \
         "$pkgdir"/usr/lib/modules/$_extramodules/nvidia.ko

  # NVIDIA Unified Memory kernel module; provides functionality for sharing memory between the CPU and GPU in
  # CUDA programs. Generally loaded into the kernel when a CUDA program is started, and used by the CUDA
  # driver on supported platforms: http://devblogs.nvidia.com/parallelforall/unified-memory-in-cuda-6/
  install -Dm644 $_pkg/kernel/nvidia-uvm.ko \
         "$pkgdir"/usr/lib/modules/$_extramodules/nvidia-uvm.ko

  # Kernel module responsible for programming the display engine of the GPU. User-mode NVIDIA driver components
  # such as the NVIDIA X driver, OpenGL driver, and VDPAU driver communicate with nvidia-modeset.ko through the
  # /dev/nvidia-modeset device file.
  install -Dm644 $_pkg/kernel/nvidia-modeset.ko \
         "$pkgdir"/usr/lib/modules/$_extramodules/nvidia-modeset.ko

  # NVIDIA DRM kernel module; registers as a DRM driver to provide GEM and PRIME DRM capabilities
  # for atomic DRM KMS and graphics display offload on Optimus notebooks:
  # https://devtalk.nvidia.com/default/topic/925605/linux/nvidia-364-12-release-vulkan-glvnd-drm-kms-and-eglstreams/
  install -Dm644 $_pkg/kernel/nvidia-drm.ko \
         "$pkgdir"/usr/lib/modules/$_extramodules/nvidia-drm.ko

  # Compress
  gzip "$pkgdir"/usr/lib/modules/$_extramodules/nvidia*.ko

  # Write _extramodules to .install
  sed -i "s/_extramodules='.*'/_extramodules='$_extramodules'/" "$startdir"/$install

  # Blacklist Nouveau
  install -d "$pkgdir"/usr/lib/modprobe.d/
  echo "blacklist nouveau" >> "$pkgdir"/usr/lib/modprobe.d/nvidia.conf
}
