# Maintainer : Bjoern Bidar - theodorstormgrade@gmail.com
     
pkgname=nvidia-pf
pkgver=364.19
pkgrel=2
_goodkver=4.5
_badkver=4.6
_modver=${_goodkver}-pf
_extramodules=extramodules-$_modver
_kernver="$(cat /usr/lib/modules/${_extramodules}/version)"
_SYSSRC="/usr/lib/modules/$_kernver/build"
_pf_kernel=$(pacman -Qqo /boot/vmlinuz-linux-pf)
#_pf_headers=$(pacman -Qqo ${_SYSSRC})
_cpu=$(sed -e "s/linux-pf//" <<<${_pf_kernel})

pkgdesc="NVIDIA drivers for linux-pf."
arch=('i686' 'x86_64')
url="http://www.nvidia.com/"
makedepends=("linux-pf-headers>=${_goodkver}" "linux-pf-headers<${_badkver}")
depends=("linux-pf>=${_goodkver}" "linux-pf<${_badkver}" "nvidia-utils=${pkgver}")

if [[ ${_cpu} ]]; then
  true && pkgdesc="NVIDIA drivers for linux-pf${_cpu}."
  true && makedepends=("linux-pf-headers${_cpu}>=${_goodkver}" "linux-pf-headers${_cpu}<${_badkver}")
  true && depends=("linux-pf${_cpu}>=${_goodkver}" "linux-pf${_cpu}<${_badkver}" "nvidia-utils=${pkgver}")
fi
conflicts=( 'nvidia-96xx' 'nvidia-173xx' 'nvidia-pf-core2' 'nvidia-pf-k8'
  'nvidia-pf-atom' 'nvidia-pf-psc' 'nvidia-pf-p4' 'nvidia-pf-p3'
 'nvidia-pf-pm' 'nvidia-pf-k7')
license=('custom')
install=nvidia.install
options=(!strip)
source_i686=("http://us.download.nvidia.com/XFree86/Linux-x86/${pkgver}/NVIDIA-Linux-x86-${pkgver}.run")
source_x86_64=("http://us.download.nvidia.com/XFree86/Linux-x86_64/${pkgver}/NVIDIA-Linux-x86_64-${pkgver}-no-compat32.run")
md5sums_i686=('8a4015213c4a8f1c80e9520d04a32a7b')
md5sums_x86_64=('ad7a0b1855b3913390fb75b4cc3a26dc')

[[ "$CARCH" = "i686" ]] && _pkg="NVIDIA-Linux-x86-${pkgver}"
[[ "$CARCH" = "x86_64" ]] && _pkg="NVIDIA-Linux-x86_64-${pkgver}-no-compat32"
     

prepare()
{
  cd "${srcdir}"
  [[ -d "${_pkg}" ]] && rm -rf "${_pkg}"
  sh "${_pkg}.run" --extract-only
  cd "${_pkg}"
  # patches here
}

build() {
  _kernver="$(cat /usr/lib/modules/${_extramodules}/version)"
  cd "${_pkg}"/kernel
  make SYSSRC=/usr/lib/modules/"${_kernver}/build" module
}


package() {
  if [[ ${_cpu} ]]; then
    true && pkgname=${pkgname}${_cpu}
    true && conflicts=(${conflicts[@]/nvidia-pf${_cpu}/} 'nvidia-pf')
  fi
  install -D -m644 "${srcdir}/${_pkg}/kernel/nvidia.ko" \
          "${pkgdir}/usr/lib/modules/${_extramodules}/nvidia.ko"
  install -D -m644 "${srcdir}/${_pkg}/kernel/nvidia-modeset.ko" \
          "${pkgdir}/usr/lib/modules/${_extramodules}/nvidia-modeset.ko"
  install -D -m644 "${srcdir}/${_pkg}/kernel/nvidia-drm.ko" \
         "${pkgdir}/usr/lib/modules/${_extramodules}/nvidia-drm.ko"


  if [[ "$CARCH" = "x86_64" ]]; then
      install -D -m644 "${srcdir}/${_pkg}/kernel/nvidia-uvm.ko" \
              "${pkgdir}/usr/lib/modules/${_extramodules}/nvidia-uvm.ko"
  fi

  gzip "${pkgdir}/usr/lib/modules/${_extramodules}/"*.ko
  install -d -m755 "${pkgdir}/usr/lib/modprobe.d"
  
  sed -i -e "s/EXTRAMODULES='.*'/EXTRAMODULES='${_extramodules}'/" "${startdir}/nvidia.install"
  echo "blacklist nouveau" >> "${pkgdir}/usr/lib/modprobe.d/nvidia-pf.conf"
}

