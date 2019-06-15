pkgname=nsight
pkgver=2019.3.1
_pkgver=${pkgver//\./_}
pkgrel=2
pkgdesc="Standalone application for the debugging and profiling of graphics applications"
arch=(x86_64)
url="https://developer.nvidia.com/nsight-graphics"
license=("custom")
#makedepends=("cmake")
#depends=("libx11" "libxcb" "mesa" "libgl" "qt5-base" "qt5-svg" "qt5-x11extras" "xcb-util-keysyms")
depends=("libx11" "libxcb" "nvidia" "openssl" "icu" "qt5-base" "qt5-multimedia" "qt5-location" "qt5-declarative" "qt5-script" "qt5-sensors" "qt5-svg" "qt5-webchannel" "qt5-webengine" "qt5-xmlpatterns" "qt5-tools" "qt5-charts")
source=("NVIDIA_Nsight_Graphics_${pkgver}.run::https://developer.nvidia.com/rdp/assets/nsight-graphics-${_pkgver}-linux-installer"
        "http://developer.download.nvidia.com/NsightVisualStudio/3.1/Documentation/UserGuide/HTML/Content/Images/NSight_256.png"
        "nsight.desktop")
sha512sums=("e106219e372f1eae381140fa4fa9cea05b67ad78759d76bb922d6a098139c79ad7424290706d2a68b24083686d9f038f10336c9245c728f48254ac4d83ccdf40"
            "784985c2bd3a053cee4887af3b960c7fdc041dda3ca71196ec0870d5413f646d542687b16bffe85985a46d70f68ccf7df29ed5e39952d5e553a4beec485a1185"
            "f4b1c7e2d152b765838f39a247cd57e6d4cae6a3b93d88d3b8e448e6ecf0115b806ceaacff60455d611e594b0121c16281f832a081b64ddf42009fe8d0548edd")

prepare() {
  sh "NVIDIA_Nsight_Graphics_${pkgver}.run" --noexec --target ${pkgname}
  # Clearing the registering of VK_LAYER_NV_nomad, do it manually in package
  echo "" > ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/VK_LAYER_NV_nomad.sh

  # Remove libs in favor of system from depends
  # openssl
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libcrypto.so.1.0.0
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libssl.so.1.0.0
  # icu
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libicudata.so.56
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libicui18n.so.56
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libicuuc.so.56
  # qt5-base
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Concurrent.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Core.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5DBus.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Gui.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Network.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5OpenGL.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5PrintSupport.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Sql.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Test.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Widgets.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5XcbQpa.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Xml.so.5
  #rm -rf ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/Plugins/imageformats
  #rm -rf ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/Plugins/platforms
  # qt5-multimedia
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5MultimediaQuick.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Multimedia.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5MultimediaWidgets.so.5
  # qt5-location
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Positioning.so.5
  # qt5-declarative
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Qml.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5QuickParticles.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Quick.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5QuickTest.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5QuickWidgets.so.5
  # qt5-script
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Script.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5ScriptTools.so.5
  # qt5-sensors
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Sensors.so.5
  # qt5-svg
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Svg.so.5
  # qt5-webchannel
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5WebChannel.so.5
  # qt5-webengine
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5WebEngine.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5WebEngineCore.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5WebEngineWidgets.so.5
  # qt5-xmlpatterns
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5XmlPatterns.so.5
  # qt5-tools
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Help.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5DesignerComponents.so.5
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Designer.so.5
  # qt5-charts
  #rm ${srcdir}/${pkgname}/pkg/host/linux-desktop-nomad-x64/libQt5Charts.so.5
}

package() {
  cd ${srcdir}/${pkgname}
  ./install-linux.pl -noprompt -targetpath=${pkgdir}/opt/${pkgname}

  install -dm 755 "${pkgdir}"/usr/bin
  ln -s /opt/nsight/host/linux-desktop-nomad-x64/nv-nsight-gfx "${pkgdir}"/usr/bin

  install -Dt "${pkgdir}/usr/share/vulkan/implicit_layer.d" -m644 "${srcdir}/${pkgname}/pkg/target/linux-desktop-nomad-x64/VK_LAYER_NV_nomad_release_public_${_pkgver}.json"

  install -Dm644 "${srcdir}/${pkgname}.desktop" ${pkgdir}/usr/share/applications/${pkgname}.desktop
  install -Dm644 ${srcdir}/NSight_256.png ${pkgdir}/usr/share/icons/hicolor/256x256/apps/${pkgname}.png

  install -Dt "${pkgdir}/usr/share/licenses/${pkgname}" -m644 "${srcdir}/${pkgname}/pkg/EULA.txt"
}

# vim:set ts=2 sw=2 et:
