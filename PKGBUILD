# Maintainer:  Jonathon Fernyhough <jonathon+m2x+dev>
# Contributor: Sven-Hendrik Haase <svenstaro@gmail.com>
# Contributor: Thomas Baechler <thomas@archlinux.org>
# Contributor: James Rayner <iphitus@gmail.com>

pkgbase=nvidia-470xx-utils
pkgname=('nvidia-470xx-utils' 'opencl-nvidia-470xx' 'nvidia-470xx-dkms')
pkgver=470.82.00
pkgrel=2
arch=('x86_64')
url="http://www.nvidia.com/"
license=('custom')
options=('!strip')
_pkg="NVIDIA-Linux-x86_64-${pkgver}"
source=('nvidia-drm-outputclass.conf'
        'nvidia-470xx-utils.sysusers'
        "https://us.download.nvidia.com/XFree86/Linux-x86_64/${pkgver}/${_pkg}.run")
sha512sums=('de7116c09f282a27920a1382df84aa86f559e537664bb30689605177ce37dc5067748acf9afd66a3269a6e323461356592fdfc624c86523bf105ff8fe47d3770'
            '4b3ad73f5076ba90fe0b3a2e712ac9cde76f469cd8070280f960c3ce7dc502d1927f525ae18d008075c8f08ea432f7be0a6c3a7a6b49c361126dcf42f97ec499'
            'f4135efd748d8835e9719e6ef93a86c5646a4d771c63e31f0bdaa0cf6ddf25ce9356eca58c27addb988f4cbe88c9bdcc0536512a46915826261d8f4f4247ebd8')


create_links() {
    # create soname links
    find "$pkgdir" -type f -name '*.so*' ! -path '*xorg/*' -print0 | while read -d $'\0' _lib; do
        _dirname="$(dirname "${_lib}")"
        _original="$(basename "${_lib}")"
        _soname="$(readelf -d "${_lib}" | grep -Po 'SONAME.*: \[\K[^]]*' || true)"
        _base="$(echo ${_soname} | sed -r 's/(.*)\.so.*/\1.so/')"

        pushd "${_dirname}" >/dev/null

        if [[ -n "${_soname}" && ! -e "./${_soname}" ]]; then
            ln -s $(basename "${_lib}") "./${_soname}"
        fi
        if [[ -n "${_base}" && ! -e "./${_base}" ]]; then
            ln -s "./${_soname}" "./${_base}"
        fi

        popd >/dev/null
    done
}

prepare() {
    sh "${_pkg}.run" --extract-only
    cd "${_pkg}"
    bsdtar -xf nvidia-persistenced-init.tar.bz2

    cd kernel
    sed -i "s/__VERSION_STRING/${pkgver}/" dkms.conf
    sed -i 's/__JOBS/`nproc`/' dkms.conf
    sed -i 's/__DKMS_MODULES//' dkms.conf
    sed -i '$iBUILT_MODULE_NAME[0]="nvidia"\
DEST_MODULE_LOCATION[0]="/kernel/drivers/video"\
BUILT_MODULE_NAME[1]="nvidia-uvm"\
DEST_MODULE_LOCATION[1]="/kernel/drivers/video"\
BUILT_MODULE_NAME[2]="nvidia-modeset"\
DEST_MODULE_LOCATION[2]="/kernel/drivers/video"\
BUILT_MODULE_NAME[3]="nvidia-drm"\
DEST_MODULE_LOCATION[3]="/kernel/drivers/video"\
BUILT_MODULE_NAME[4]="nvidia-peermem"\
DEST_MODULE_LOCATION[4]="/kernel/drivers/video"' dkms.conf

    # Gift for linux-rt guys
    sed -i 's/NV_EXCLUDE_BUILD_MODULES/IGNORE_PREEMPT_RT_PRESENCE=1 NV_EXCLUDE_BUILD_MODULES/' dkms.conf
}

package_opencl-nvidia-470xx() {
    pkgdesc="OpenCL implemention for NVIDIA"
    depends=('zlib')
    optdepends=('opencl-headers: headers necessary for OpenCL development')
    provides=('opencl-driver' 'opencl-nvidia')
    conflicts=('opencl-nvidia')
    cd "${_pkg}"

    # OpenCL
    install -D -m644 nvidia.icd "${pkgdir}/etc/OpenCL/vendors/nvidia.icd"
    install -D -m755 "libnvidia-compiler.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-compiler.so.${pkgver}"
    install -D -m755 "libnvidia-opencl.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-opencl.so.${pkgver}"

    create_links

    mkdir -p "${pkgdir}/usr/share/licenses"
    ln -s nvidia-utils "${pkgdir}/usr/share/licenses/opencl-nvidia"
}

package_nvidia-470xx-dkms() {
    pkgdesc="NVIDIA drivers - module sources"
    depends=('dkms' "nvidia-470xx-utils=$pkgver" 'libglvnd')
    provides=('NVIDIA-MODULE')

    cd ${_pkg}

    install -dm 755 "${pkgdir}"/usr/src
    cp -dr --no-preserve='ownership' kernel "${pkgdir}/usr/src/nvidia-${pkgver}"

    echo "blacklist nouveau" |
        install -Dm644 /dev/stdin "${pkgdir}/usr/lib/modprobe.d/${pkgname}.conf"

    install -Dt "${pkgdir}/usr/share/licenses/${pkgname}" -m644 "${srcdir}/${_pkg}/LICENSE"
}

package_nvidia-470xx-utils() {
    pkgdesc="NVIDIA drivers utilities"
    depends=('xorg-server' 'libglvnd' 'egl-wayland')
    optdepends=('nvidia-470xx-settings: configuration tool'
                'xorg-server-devel: nvidia-xconfig'
                'opencl-nvidia-470xx: OpenCL support')
    conflicts=('nvidia-libgl' 'nvidia-utils')
    provides=('vulkan-driver' 'opengl-driver' 'nvidia-libgl' 'nvidia-utils')
    replaces=('nvidia-libgl')
    install="${pkgname}.install"

    cd "${_pkg}"

    # Check http://us.download.nvidia.com/XFree86/Linux-x86_64/${pkgver}/README/installedcomponents.html
    # for hints on what needs to be installed where.

    # X driver
    install -D -m755 nvidia_drv.so "${pkgdir}/usr/lib/xorg/modules/drivers/nvidia_drv.so"

    # Wayland/GBM
    #install -D -m755 libnvidia-egl-gbm.so.1* -t "${pkgdir}/usr/lib/"
    #install -D -m644 15_nvidia_gbm.json "${pkgdir}/usr/share/egl/egl_external_platform.d/15_nvidia_gbm.json"
    #mkdir -p "${pkgdir}/usr/lib/gbm"
    #ln -sr "${pkgdir}/usr/lib/libnvidia-allocator.so.${pkgver}" "${pkgdir}/usr/lib/gbm/nvidia-drm_gbm.so"

    # firmware
    install -D -m644 firmware/gsp.bin "${pkgdir}/usr/lib/firmware/nvidia/${pkgver}/gsp.bin"

    # GLX extension module for X
    install -D -m755 "libglxserver_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/nvidia/xorg/libglxserver_nvidia.so.${pkgver}"
    # Ensure that X finds glx
    ln -s "libglxserver_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/nvidia/xorg/libglxserver_nvidia.so.1"
    ln -s "libglxserver_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/nvidia/xorg/libglxserver_nvidia.so"

    install -D -m755 "libGLX_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/libGLX_nvidia.so.${pkgver}"

    # OpenGL libraries
    install -D -m755 "libEGL_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/libEGL_nvidia.so.${pkgver}"
    install -D -m755 "libGLESv1_CM_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/libGLESv1_CM_nvidia.so.${pkgver}"
    install -D -m755 "libGLESv2_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/libGLESv2_nvidia.so.${pkgver}"
    install -D -m644 "10_nvidia.json" "${pkgdir}/usr/share/glvnd/egl_vendor.d/10_nvidia.json"

    # OpenGL core library
    install -D -m755 "libnvidia-glcore.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-glcore.so.${pkgver}"
    install -D -m755 "libnvidia-eglcore.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-eglcore.so.${pkgver}"
    install -D -m755 "libnvidia-glsi.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-glsi.so.${pkgver}"

    # misc
    install -D -m755 "libnvidia-ifr.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-ifr.so.${pkgver}"
    install -D -m755 "libnvidia-fbc.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-fbc.so.${pkgver}"
    install -D -m755 "libnvidia-encode.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-encode.so.${pkgver}"
    install -D -m755 "libnvidia-cfg.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-cfg.so.${pkgver}"
    install -D -m755 "libnvidia-ml.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-ml.so.${pkgver}"
    install -D -m755 "libnvidia-glvkspirv.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-glvkspirv.so.${pkgver}"
    install -D -m755 "libnvidia-allocator.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-allocator.so.${pkgver}"
    install -D -m755 "libnvidia-vulkan-producer.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-vulkan-producer.so.${pkgver}"
    # Sigh libnvidia-vulkan-producer.so has no SONAME set so create_links doesn't catch it. NVIDIA please fix!
    ln -s "libnvidia-vulkan-producer.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-vulkan-producer.so.1"
    ln -s "libnvidia-vulkan-producer.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-vulkan-producer.so"

    # Vulkan ICD
    install -D -m644 "nvidia_icd.json" "${pkgdir}/usr/share/vulkan/icd.d/nvidia_icd.json"
    install -D -m644 "nvidia_layers.json" "${pkgdir}/usr/share/vulkan/implicit_layer.d/nvidia_layers.json"

    # VDPAU
    install -D -m755 "libvdpau_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/vdpau/libvdpau_nvidia.so.${pkgver}"

    # nvidia-tls library
    install -D -m755 "libnvidia-tls.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-tls.so.${pkgver}"

    # CUDA
    install -D -m755 "libcuda.so.${pkgver}" "${pkgdir}/usr/lib/libcuda.so.${pkgver}"
    install -D -m755 "libnvcuvid.so.${pkgver}" "${pkgdir}/usr/lib/libnvcuvid.so.${pkgver}"

    # PTX JIT Compiler (Parallel Thread Execution (PTX) is a pseudo-assembly language for CUDA)
    install -D -m755 "libnvidia-ptxjitcompiler.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-ptxjitcompiler.so.${pkgver}"

    # raytracing
    install -D -m755 "libnvoptix.so.${pkgver}" "${pkgdir}/usr/lib/libnvoptix.so.${pkgver}"
    install -D -m755 "libnvidia-rtcore.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-rtcore.so.${pkgver}"
    install -D -m755 "libnvidia-cbl.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-cbl.so.${pkgver}"

    # NGX
    install -D -m755 nvidia-ngx-updater "${pkgdir}/usr/bin/nvidia-ngx-updater"
    install -D -m755 "libnvidia-ngx.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-ngx.so.${pkgver}"
    install -D -m755 _nvngx.dll "${pkgdir}/usr/lib/nvidia/wine/_nvngx.dll"
    install -D -m755 nvngx.dll "${pkgdir}/usr/lib/nvidia/wine/nvngx.dll"

    # Optical flow
    install -D -m755 "libnvidia-opticalflow.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-opticalflow.so.${pkgver}"

    # DEBUG
    install -D -m755 nvidia-debugdump "${pkgdir}/usr/bin/nvidia-debugdump"

    # nvidia-xconfig
    install -D -m755 nvidia-xconfig "${pkgdir}/usr/bin/nvidia-xconfig"
    install -D -m644 nvidia-xconfig.1.gz "${pkgdir}/usr/share/man/man1/nvidia-xconfig.1.gz"

    # nvidia-bug-report
    install -D -m755 nvidia-bug-report.sh "${pkgdir}/usr/bin/nvidia-bug-report.sh"

    # nvidia-smi
    install -D -m755 nvidia-smi "${pkgdir}/usr/bin/nvidia-smi"
    install -D -m644 nvidia-smi.1.gz "${pkgdir}/usr/share/man/man1/nvidia-smi.1.gz"

    # nvidia-cuda-mps
    install -D -m755 nvidia-cuda-mps-server "${pkgdir}/usr/bin/nvidia-cuda-mps-server"
    install -D -m755 nvidia-cuda-mps-control "${pkgdir}/usr/bin/nvidia-cuda-mps-control"
    install -D -m644 nvidia-cuda-mps-control.1.gz "${pkgdir}/usr/share/man/man1/nvidia-cuda-mps-control.1.gz"

    # nvidia-modprobe
    # This should be removed if nvidia fixed their uvm module!
    install -D -m4755 nvidia-modprobe "${pkgdir}/usr/bin/nvidia-modprobe"
    install -D -m644 nvidia-modprobe.1.gz "${pkgdir}/usr/share/man/man1/nvidia-modprobe.1.gz"

    # nvidia-persistenced
    install -D -m755 nvidia-persistenced "${pkgdir}/usr/bin/nvidia-persistenced"
    install -D -m644 nvidia-persistenced.1.gz "${pkgdir}/usr/share/man/man1/nvidia-persistenced.1.gz"
    install -D -m644 nvidia-persistenced-init/systemd/nvidia-persistenced.service.template "${pkgdir}/usr/lib/systemd/system/nvidia-persistenced.service"
    sed -i 's/__USER__/nvidia-persistenced/' "${pkgdir}/usr/lib/systemd/system/nvidia-persistenced.service"

    # application profiles
    install -D -m644 nvidia-application-profiles-${pkgver}-rc "${pkgdir}/usr/share/nvidia/nvidia-application-profiles-${pkgver}-rc"
    install -D -m644 nvidia-application-profiles-${pkgver}-key-documentation "${pkgdir}/usr/share/nvidia/nvidia-application-profiles-${pkgver}-key-documentation"

    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/nvidia-utils/LICENSE"
    install -D -m644 README.txt "${pkgdir}/usr/share/doc/nvidia/README"
    install -D -m644 NVIDIA_Changelog "${pkgdir}/usr/share/doc/nvidia/NVIDIA_Changelog"
    cp -r html "${pkgdir}/usr/share/doc/nvidia/"
    ln -s nvidia "${pkgdir}/usr/share/doc/nvidia-utils"

    # new power management support
    install -D -m644 systemd/system/nvidia-suspend.service "${pkgdir}/usr/lib/systemd/system/nvidia-suspend.service"
    install -D -m644 systemd/system/nvidia-hibernate.service "${pkgdir}/usr/lib/systemd/system/nvidia-hibernate.service"
    install -D -m644 systemd/system/nvidia-resume.service "${pkgdir}/usr/lib/systemd/system/nvidia-resume.service"
    install -D -m755 systemd/system-sleep/nvidia "${pkgdir}/usr/lib/systemd/system-sleep/nvidia"
    install -D -m755 systemd/nvidia-sleep.sh "${pkgdir}/usr/bin/nvidia-sleep.sh"

    # distro specific files must be installed in /usr/share/X11/xorg.conf.d
    install -D -m644 "${srcdir}/nvidia-drm-outputclass.conf" "${pkgdir}/usr/share/X11/xorg.conf.d/10-nvidia-drm-outputclass.conf"

    install -Dm644 "${srcdir}/nvidia-470xx-utils.sysusers" "${pkgdir}/usr/lib/sysusers.d/$pkgname.conf"

    create_links
}
