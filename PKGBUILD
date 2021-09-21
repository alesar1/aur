# Maintainer: Vasiliy Stelmachenok <cabopust@yandex.ru>
# Contributor: Pavel Priluckiy <gerallitluis2@gmail.com>
# Contributor: Avinash Reddy <cassilasreddythemostwanted3108@gmail.com>
# Contributor: solonovamax <solonovamax@12oclockpoint.com>

# Integration of the nvidia-patch from keylase.
#
# This patch removes restriction on maximum number of simultaneous NVENC video encoding sessions imposed by Nvidia to consumer-grade GPUs.
# You can read more about it here: https://github.com/keylase/nvidia-patch 
#
# WARNING: In extreme cases, this can damage the NVENC and NvFBC libraries.
_nvidia_patch=

# This parameter sets the default configuration of NVIDIA PowerMizer (schema).
#
# First of all, the NVIDIA driver has two GPU clock frequency management strategies: 
# Adaptive clock management strategy (0x22) and static clock management strategy (0x33). 
#
# When using the adaptive strategy, the clock frequency is adjusted according 
# to the requirements of the task that the GPU has to perform,
# and it will switch between performance levels accordingly. 
# This strikes a balance between performance when needed and powersaving.
# Static strategy implies a clear locking of the clock frequency at a certain performance level. 
#
# There are also three levels of performance:
# 2. Maximum performance.
# 1. Balance (between performance and powersaving).
# 0. Powersaving.
#
# All of the above characteristics depend on the power source.
# That is, different performance levels and default frequency clock management strategy
# сan be set for battery power source and for AC power source.
#
# Now that we've worked out how it works, you can choose the power scheme you want:
#
# Available power schemes:
# Value                                        AC power source | Battery 
# -------------------------------------------------------------|-------------------------------------------------------------
# 1 - Static clock frequency, Maximum performance              | Adaptive clock frequency, preferably powersaving
# 2 - Static clock frequency, Maximum performance              | Static strategy, maximum powersavings
# 3 - Static clock frequency  Maximum performance              | Adaptive clock frequency
# 4 - Adaptive clock frequency, preferably maximum performance | Static strategy, maximum powersavings
# 5 - Adaptive clock frequency, preferably maximum performance | Adaptive clock frequency, preferably powersaving
# 6 - Adaptive clock frequency                                 | Static strategy, maximum powersavings
# 7 - Static clock frequency                                   | Adaptive clock frequency
#
# Note: Setting up the PowerMizer circuitry is not overclocking the GPU and assumes safe use for your hardware. 
# However, you can reassign the behavior of the power scheme through the Xorg option "RegistryDwords".
#
# Read more about NVIDIA PowerMizer settings here: https://wins911.blogspot.com/2012/06/etcx11xorg.html 
_powermizer_scheme=

# Enforces applying a certain performance level
# (see description of _powermizer_scheme option above for details),
# while activating some GPU overclocking possibilities, such as:
# controlling GPU fan speed via nvidia-settings.
#
# Possible values:
# 1 - Force maximum powersaving
# 2 - Force a balance between performance and powersaving
# 3 - Force Max Performnace (recommended)
#
# These settings apply to all power sources,
# and cannot be configured for each one individually
# as _powermizer_scheme does.
#
# WARNING: WORKS ONLY FOR LAPTOPS (NVIDIA PRIME)!
_override_max_perf=

pkgbase=nvidia-dkms-performance
pkgname=(nvidia-dkms-performance nvidia-settings-performance nvidia-utils-performance opencl-nvidia-performance
	 lib32-nvidia-utils-performance lib32-opencl-nvidia-performance)
pkgver=470.74
pkgrel=1
arch=('x86_64')
url='https://www.nvidia.com/'
license=('custom')
options=(!strip)
_pkg="NVIDIA-Linux-${CARCH}-${pkgver}"
source=("https://us.download.nvidia.com/XFree86/Linux-${CARCH}/${pkgver}/${_pkg}.run"
        'nvidia-drm-outputclass.conf'
        'nvidia-utils.sysusers'
        'nvidia.hook'
        '0001-nvidia-dkms-conf.patch'
        '0002-linux-rt.patch'
        '0003-nvidia-drm-modeset.patch'
        '0004-NVreg-Improvements.patch'
        '0005-nvidia-settings-paths.patch')
sha256sums=('33e513dee329f2a9b106882979f1747eccb64eb698952c12cd030987cecadf6a'
            'ae1fee1238da7aeb0e2d3e3d3fe4478dfe3a2bcbbab529586ac8f3bb55aa47ae'
            'd8d1caa5d72c71c6430c2a0d9ce1a674787e9272ccce28b9d5898ca24e60a167'
            '717920f48b4d7ec50b83d2d096bab36449b30f1b5d144f0fe586627025367293'
            'a885c208a4cda620797eae6ffca412c7a3c44fa11624fa1fee5b04c29fcf9cc4'
            '6ef8cde2a5c1a5eadaefc0b4fb9005ab433ac10b0452a015b9d93e345156665e'
            '7d9392f36374ab609417abe4b5493bbb9d868a2ee29cdb877d4be8b098eb527b'
            '898fe80847fb2974e1d16b380c16569ddb3ab24c6974bbeb72d68e8e13902311'
            '6bb5456f14435ad329d750147c749d7c50fb8ae11778c7fcc9e6e3cd256c4017')

create_links() {
    _orig_dir="$(pwd)"

    # create soname links
    for _lib in $(find "${pkgdir}" -name '*.so*' | grep -v 'xorg/'); do
        _dirname="$(dirname "${_lib}")"
        _original="$(basename "${_lib}")"
        _soname="$(readelf -d "${_lib}" | grep -Po 'SONAME.*: \[\K[^]]*' || true)"
        _base="$(echo ${_soname} | sed -r 's/(.*)\.so.*/\1.so/')"

        cd "${_dirname}"

        if ! [[ -z "${_soname}" ]]; then # if not empty
            if ! [[ -e "./${_soname}" ]]; then
                ln -s $(basename "${_lib}") "./${_soname}"
            fi
        fi
        if ! [[ -z "${_base}" ]]; then # if not empty (if _soname is empty, _base should be too)
            if ! [[ -e "./${_base}" ]]; then
                ln -s "./${_soname}" "./${_base}"
            fi
        fi
    done
    cd "${_orig_dir}"
}

prepare() {
    [ -d "$_pkg" ] && rm -rf "$_pkg"
    
    sh "${_pkg}.run" --extract-only
    cd "${_pkg}"
   
    bsdtar -xf nvidia-persistenced-init.tar.bz2
    gunzip nvidia-{cuda-mps-control,modprobe,persistenced,settings,smi,xconfig}.1.gz
   
    # Patching kernel modules
    local src
    for src in "${source[@]}"; do
        src="${src%%::*}"
        src="${src##*/}"
        [[ $src = *.patch ]] || continue
    echo "Applying patch $src..."
    patch -Np1 < "../$src"
    done

    if [ ! -z $_nvidia_patch ]; then
        # NVENC
        sed -i 's/\xe8\xc5\x20\xff\xff\x85\xc0\x41\x89\xc4/\xe8\xc5\x20\xff\xff\x29\xc0\x41\x89\xc4/g' \
		"${srcdir}/${_pkg}/libnvidia-encode.so.${pkgver}"
        # NvFBC
        sed -i 's/\x83\xfe\x01\x73\x08\x48/\x83\xfe\x00\x72\x08\x48/' \
		"${srcdir}/${_pkg}/libnvidia-fbc.so.${pkgver}"
    fi

    if [ ! -z $_powermizer_scheme ] && [ -z $_override_max_perf ]; then
        echo "You have chosen a PowerMizer scheme: $_powermizer_scheme"
        if [ "$_powermizer_scheme" = "1" ]; then
            sed -i 's/__NV_REGISTRY_DWORDS, NULL/__NV_REGISTRY_DWORDS, "PowerMizerEnable=0x1;PerfLevelSrc=0x3322;PowerMizerDefault0x3;PowerMizerDefaultAC=0x1"/' kernel/nvidia/nv-reg.h
        elif [ "$_powermizer_scheme" = "2" ]; then
            sed -i 's/__NV_REGISTRY_DWORDS, NULL/__NV_REGISTRY_DWORDS, "PowerMizerEnable=0x1;PerfLevelSrc=0x2222;PowerMizerDefault0x3;PowerMizerDefaultAC=0x1"/' kernel/nvidia/nv-reg.h
        elif [ "$_powermizer_scheme" = "3" ]; then
            sed -i 's/__NV_REGISTRY_DWORDS, NULL/__NV_REGISTRY_DWORDS, "PowerMizerEnable=0x1;PerfLevelSrc=0x3322;PowerMizerDefaultAC=0x1"/' kernel/nvidia/nv-reg.h
        elif [ "$_powermizer_scheme" = "4" ]; then
            sed -i 's/__NV_REGISTRY_DWORDS, NULL/__NV_REGISTRY_DWORDS, "PowerMizerEnable=0x1;PerfLevelSrc=0x2233;PowerMizerDefault0x3;PowerMizerDefault0x3;PowerMizerDefaultAC=0x1"/' kernel/nvidia/nv-reg.h
        elif [ "$_powermizer_scheme" = "5" ]; then
            sed -i 's/__NV_REGISTRY_DWORDS, NULL/__NV_REGISTRY_DWORDS, "PowerMizerEnable=0x1;PerfLevelSrc=0x3333;PowerMizerDefault0x3;PowerMizerDefault0x3;PowerMizerDefaultAC=0x1"/' kernel/nvidia/nv-reg.h
        elif [ "$_powermizer_scheme" = "6" ]; then
            sed -i 's/__NV_REGISTRY_DWORDS, NULL/__NV_REGISTRY_DWORDS, "PowerMizerEnable=0x1;PerfLevelSrc=0x2233;PowerMizerDefault=0x1"/' kernel/nvidia/nv-reg.h
        elif [ "$_powermizer_scheme" = "7" ]; then
            sed -i 's/__NV_REGISTRY_DWORDS, NULL/__NV_REGISTRY_DWORDS, "PowerMizerEnable=0x1;PerfLevelSrc=0x3322"/' kernel/nvidia/nv-reg.h
        else 
            echo "An incorrect PowerMizer scheme has been selected."
        fi
    fi

    if [ ! -z $_override_max_perf ] && [ -z $_powermizer_scheme ]; then
        echo "You have chosen a Override Max Perf level: $_override_max_perf"
        if [ "$_override_max_perf" = "1" ]; then
            sed -i 's/__NV_REGISTRY_DWORDS, NULL/__NV_REGISTRY_DWORDS, "OverrideMaxPerf=0x1"/' kernel/nvidia/nv-reg.h
        elif [ "$_override_max_perf" = "2" ]; then
            sed -i 's/__NV_REGISTRY_DWORDS, NULL/__NV_REGISTRY_DWORDS, "OverrideMaxPerf=0x2"/' kernel/nvidia/nv-reg.h
        elif [ "$_override_max_perf" = "3" ]; then
            sed -i 's/__NV_REGISTRY_DWORDS, NULL/__NV_REGISTRY_DWORDS, "OverrideMaxPerf=0x3"/' kernel/nvidia/nv-reg.h
        else
            echo "An incorrect Override Max Perf level has been selected."
        fi
    fi
}

package_nvidia-dkms-performance() {
    pkgdesc='NVIDIA driver sources for linux with some optimizations'
    depends=('dkms' "nvidia-utils-performance=${pkgver}" 'libglvnd')
    provides=("nvidia=${pkgver}" "nvidia-dkms=${pkgver}" 
              "nvidia-dkms-performance=${pkgver}" 'NVIDIA-MODULE')
    conflicts=('nvidia' 'nvidia-dkms')
    cd "${_pkg}"

    # Pacman hook for update initramfs after an NVIDIA driver upgrade
    install -D -m644 "${srcdir}/nvidia.hook" -t "${pkgdir}/usr/share/libalpm/hooks"

    mkdir -p "${pkgdir}/usr/src"
    cp -dr --no-preserve='ownership' kernel "${pkgdir}/usr/src/nvidia-${pkgver}"

    # Extended Block Nouveau Driver
    # If you want to disable the Nouveau driver module completely, 
    # rebuild your kernel with the appropriate kernel option disabled:
    # Device Drivers -> Graphics Support -> < > Nouveau (NVIDIA) cards
    # This helps you avoid a conflict between the closed NVIDIA driver (this package)
    # and the open Nouveau driver, for example in situations like Wayland session 
    # when control over it goes to the open-source driver.
    install -D -m644 <(printf '%s\n%s\n' 'blacklist nouveau' 'options nouveau modeset=0') \
        "${pkgdir}/usr/lib/modprobe.d/${pkgname}.conf"

    # LICENSE
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_nvidia-settings-performance() {
    pkgdesc='Tool for configuring the NVIDIA graphics driver'
    depends=("nvidia-utils-performance>=${pkgver}" 'gtk3')
    provides=("nvidia-settings=${pkgver}" "nvidia-settings-performance=${pkgver}")
    conflicts=('nvidia-settings')
    cd "${_pkg}"
    
    install -D -m755 nvidia-settings -t "${pkgdir}/usr/bin"
    install -D -m644 nvidia-settings.1 -t "${pkgdir}/usr/share/man/man1"
    install -D -m644 nvidia-settings.png -t "${pkgdir}/usr/share/pixmaps"
    install -D -m644 nvidia-settings.desktop -t "${pkgdir}/usr/share/applications"

    # GTK 3 interface. GTK 2 has been removed and will not be supported.
    install -D -m755 "libnvidia-gtk3.so.${pkgver}" -t "${pkgdir}/usr/lib"
    
    # LICENSE
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_opencl-nvidia-performance() {
    pkgdesc='OpenCL implemention for NVIDIA'
    depends=('zlib' "nvidia-utils-performance>=${pkgver}")
    optdepends=('opencl-headers: headers necessary for OpenCL development')
    provides=("opencl-nvidia=${pkgver}" 'opencl-driver')
    conflicts=('opencl-nvidia')
    cd "${_pkg}"
    
    # OpenCL
    install -D -m644 nvidia.icd "${pkgdir}/etc/OpenCL/vendors/nvidia.icd"
    install -D -m755 "libnvidia-compiler.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libnvidia-opencl.so.${pkgver}"   -t "${pkgdir}/usr/lib"
    
    create_links

    # LICENSE
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_nvidia-utils-performance() {
    pkgdesc='NVIDIA drivers utilities and libraries'
    depends=('xorg-server' 'libglvnd')
    optdepends=('nvidia-settings-performance: configuration tool'
                'xorg-server-devel: for nvidia-xconfig'
                'egl-wayland: for Wayland support'
                'opencl-nvidia-performance: for OpenCL support')
    provides=("nvidia-utils=${pkgver}" 'vulkan-driver' 'opengl-driver' "nvidia-libgl=${pkgver}"
              "nvidia-libgl-performance=${pkgver}")
    conflicts=('nvidia-utils' 'nvidia-libgl')
    replaces=('nvidia-libgl')
    install=nvidia-utils-performance.install
    cd "${_pkg}"

    # X driver
    install -D -m755 nvidia_drv.so -t "${pkgdir}/usr/lib/xorg/modules/drivers"
    
    # firmware
    install -D -m644 firmware/gsp.bin -t "${pkgdir}/usr/lib/firmware/nvidia/${pkgver}"
    
    # GLX extension module for X
    install -D -m755 "libglxserver_nvidia.so.${pkgver}" -t "${pkgdir}/usr/lib/nvidia/xorg"
    # Ensure that X finds glx
    ln -s "libglxserver_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/nvidia/xorg/libglxserver_nvidia.so.1"
    ln -s "libglxserver_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/nvidia/xorg/libglxserver_nvidia.so"
    
    install -D -m755 "libGLX_nvidia.so.${pkgver}" -t "${pkgdir}/usr/lib"
    
    # OpenGL libraries
    install -D -m755 "libEGL_nvidia.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libGLESv1_CM_nvidia.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libGLESv2_nvidia.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m644 10_nvidia.json -t "${pkgdir}/usr/share/glvnd/egl_vendor.d"
    
    # OpenGL core library
    install -D -m755 "libnvidia-glcore.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libnvidia-eglcore.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libnvidia-glsi.so.${pkgver}" -t "${pkgdir}/usr/lib"
    
    # misc
    install -D -m755 "libnvidia-ifr.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libnvidia-fbc.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libnvidia-encode.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libnvidia-cfg.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libnvidia-ml.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libnvidia-glvkspirv.so.${pkgver}" -t "${pkgdir}/usr/lib"
    
    # Vulkan ICD
    install -D -m644 nvidia_icd.json -t "${pkgdir}/usr/share/vulkan/icd.d"
    install -D -m644 nvidia_layers.json -t "${pkgdir}/usr/share/vulkan/implicit_layer.d"
    install -D -m755 "libnvidia-vulkan-producer.so.${pkgver}" -t "${pkgdir}/usr/lib"
    
    # VDPAU
    install -D -m755 "libvdpau_nvidia.so.${pkgver}" -t "${pkgdir}/usr/lib/vdpau"
    
    # nvidia-tls library
    install -D -m755 "libnvidia-tls.so.${pkgver}" -t "${pkgdir}/usr/lib"
    
    # CUDA
    install -D -m755 "libcuda.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libnvcuvid.so.${pkgver}" -t "${pkgdir}/usr/lib"
    
    # PTX JIT Compiler (Parallel Thread Execution (PTX) is a pseudo-assembly language for CUDA)
    install -D -m755 "libnvidia-ptxjitcompiler.so.${pkgver}" -t "${pkgdir}/usr/lib"
    
    # raytracing
    install -D -m755 "libnvoptix.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libnvidia-rtcore.so.${pkgver}" -t "${pkgdir}/usr/lib"
    install -D -m755 "libnvidia-cbl.so.${pkgver}" -t "${pkgdir}/usr/lib"
    
    # Optical flow
    install -D -m755 "libnvidia-opticalflow.so.${pkgver}" -t "${pkgdir}/usr/lib"
    
    # NGX
    install -D -m755 "libnvidia-ngx.so.${pkgver}" -t "${pkgdir}/usr/lib"

    # wine nvngx lib
    install -D -m755 "_nvngx.dll" -t "${pkgdir}/usr/lib/nvidia/wine"
    install -D -m755 "nvngx.dll" -t "${pkgdir}/usr/lib/nvidia/wine"

    # nvvm
    install -D -m755 "libnvidia-nvvm.so.4.0.0" -t "${pkgdir}/usr/lib"
    
    # DEBUG
    install -D -m755 nvidia-debugdump -t "${pkgdir}/usr/bin"
    
    # nvidia-xconfig
    install -D -m755 nvidia-xconfig -t "${pkgdir}/usr/bin"
    install -D -m644 nvidia-xconfig.1 -t "${pkgdir}/usr/share/man/man1"
    
    # nvidia-bug-report
    install -D -m755 nvidia-bug-report.sh -t "${pkgdir}/usr/bin"
    
    # nvidia-smi
    install -D -m755 nvidia-smi -t "${pkgdir}/usr/bin"
    install -D -m644 nvidia-smi.1 -t "${pkgdir}/usr/share/man/man1"
    
    # nvidia-cuda-mps
    install -D -m755 nvidia-cuda-mps-server -t "${pkgdir}/usr/bin"
    install -D -m755 nvidia-cuda-mps-control -t "${pkgdir}/usr/bin"
    install -D -m644 nvidia-cuda-mps-control.1 -t "${pkgdir}/usr/share/man/man1"
    
    # nvidia-modprobe
    # This should be removed if nvidia fixed their uvm module!
    install -D -m4755 nvidia-modprobe -t "${pkgdir}/usr/bin"
    install -D -m644 nvidia-modprobe.1 -t "${pkgdir}/usr/share/man/man1"
    
    # nvidia-persistenced
    install -D -m755 nvidia-persistenced -t "${pkgdir}/usr/bin"
    install -D -m644 nvidia-persistenced.1 -t "${pkgdir}/usr/share/man/man1"
    install -D -m644 nvidia-persistenced-init/systemd/nvidia-persistenced.service.template "${pkgdir}/usr/lib/systemd/system/nvidia-persistenced.service"
    sed -i 's/__USER__/nvidia-persistenced/' "${pkgdir}/usr/lib/systemd/system/nvidia-persistenced.service"
    
    # application profiles
    install -D -m644 "nvidia-application-profiles-${pkgver}-rc" -t "${pkgdir}/usr/share/nvidia"
    install -D -m644 "nvidia-application-profiles-${pkgver}-key-documentation" -t "${pkgdir}/usr/share/nvidia"
    
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 README.txt "${pkgdir}/usr/share/doc/${pkgname}/README"
    install -D -m644 NVIDIA_Changelog -t "${pkgdir}/usr/share/doc/${pkgname}"
    install -D -m644 supported-gpus/supported-gpus.json -t "${pkgdir}/usr/share/doc/${pkgname}"
    cp -dr --no-preserve='ownership' html "${pkgdir}/usr/share/doc/${pkgname}/"
    #ln -s nvidia "${pkgdir}/usr/share/doc/nvidia-utils"
    
    # new power management support
    install -D -m644 systemd/system/*.service -t "${pkgdir}/usr/lib/systemd/system"
    install -D -m755 systemd/system-sleep/nvidia -t "${pkgdir}/usr/lib/systemd/system-sleep"
    install -D -m755 systemd/nvidia-sleep.sh -t "${pkgdir}/usr/bin"
    
    # distro specific files must be installed in /usr/share/X11/xorg.conf.d
    install -D -m644 "${srcdir}/nvidia-drm-outputclass.conf" "${pkgdir}/usr/share/X11/xorg.conf.d/10-nvidia-drm-outputclass.conf"
    
    install -D -m644 "${srcdir}/nvidia-utils.sysusers" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
    
    create_links
}

package_lib32-opencl-nvidia-performance() {
    pkgdesc='OpenCL implemention for NVIDIA (Multilib)'
    depends=('lib32-zlib' 'lib32-gcc-libs' "lib32-nvidia-utils-performance>=${pkgver}")
    optdepends=('opencl-headers: headers necessary for OpenCL development')
    provides=("lib32-opencl-nvidia=${pkgver}" 'lib32-opencl-driver')
    conflicts=('lib32-opencl-nvidia')
    cd "${_pkg}/32"
    
    # OpenCL
    install -D -m755 "libnvidia-compiler.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    install -D -m755 "libnvidia-opencl.so.${pkgver}"   -t "${pkgdir}/usr/lib32"
    
    create_links
    
    # LICENSE
    install -D -m644 "${srcdir}/${_pkg}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_lib32-nvidia-utils-performance() {
    pkgdesc='NVIDIA drivers utilities and libraries'
    depends=('lib32-zlib' 'lib32-gcc-libs' 'lib32-libglvnd' "nvidia-utils-performance>=${pkgver}")
    optdepends=('lib32-opencl-nvidia-performance: for OpenCL support')
    provides=("lib32-nvidia-utils=${pkgver}" 'lib32-vulkan-driver' 'lib32-opengl-driver'
              "lib32-nvidia-libgl=${pkgver}" "lib32-nvidia-libgl-performance=${pkgver}")
    conflicts=('lib32-nvidia-utils' 'lib32-nvidia-libgl')
    replaces=('lib32-nvidia-libgl')
    cd "${_pkg}/32"
    
    # GLX
    install -D -m755 "libGLX_nvidia.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    
    # OpenGL libraries
    install -D -m755 "libEGL_nvidia.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    install -D -m755 "libGLESv1_CM_nvidia.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    install -D -m755 "libGLESv2_nvidia.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    
    # OpenGL core library
    install -D -m755 "libnvidia-glcore.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    install -D -m755 "libnvidia-eglcore.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    install -D -m755 "libnvidia-glsi.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    
    # misc
    install -D -m755 "libnvidia-ifr.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    install -D -m755 "libnvidia-fbc.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    install -D -m755 "libnvidia-encode.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    install -D -m755 "libnvidia-ml.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    install -D -m755 "libnvidia-glvkspirv.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    
    # VDPAU
    install -D -m755 "libvdpau_nvidia.so.${pkgver}" -t "${pkgdir}/usr/lib32/vdpau"
    
    # nvidia-tls library
    install -D -m755 "libnvidia-tls.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    
    # CUDA
    install -D -m755 "libcuda.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    install -D -m755 "libnvcuvid.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    
    # PTX JIT Compiler (Parallel Thread Execution (PTX) is a pseudo-assembly language for CUDA)
    install -D -m755 "libnvidia-ptxjitcompiler.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    
    # Optical flow
    install -D -m755 "libnvidia-opticalflow.so.${pkgver}" -t "${pkgdir}/usr/lib32"
    
    create_links
    
    # LICENSE
    install -D -m644 "${srcdir}/${_pkg}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
