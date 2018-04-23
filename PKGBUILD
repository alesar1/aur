# Maintainer: Eugene Cherny <iam@oscii.ru>
pkgname=cabbage-git
pkgrel=1 
pkgver=2.0.0r1188
pkgdesc='A framework for audio software development'
arch=('x86_64')
url="http://cabbageaudio.com/"
license=('GPLv3')
makedepends=('freeglut' 'curl' 'jack' 'libxcomposite' 'libxrandr' 'libxcursor'
             'libx11' 'libxinerama' 'mesa' 'gtk3' 'vim' 'dos2unix')
depends=('csound' 'steinberg-vst36')
conflicts=('cabbage')
provides=('cabbage')
source=('git+https://github.com/rorywalsh/cabbage.git#branch=master'
        'git+https://github.com/WeAreROLI/JUCE.git#tag=5.2.0'
        'fix_default_dirs.patch'
        'cabbage.png'
        'Cabbage.desktop'
        'CabbageLite.desktop')
md5sums=('SKIP'
         'SKIP'
         '44c102c1fbd8e5b1e784136f3bcba7dd'
         'c3c8e35dd46c86f22a3565aa4dd828a8'
         '35cfc89844c90769f4dc4f8309b340b1'
         'c39a85709e31e03a0850f2e324a4faea')

_projucer_dir="JUCE/extras/Projucer/Builds/LinuxMakefile/build/"
_projucer="${_projucer_dir}/Projucer"

function patch_strings_in_file() {
    # Source (Johan Hedin):
    # http://everydaywithlinux.blogspot.com/2012/11/patch-strings-in-binary-files-with-sed.html
    # Slight modification by Colin Wallace to force the pattern to capture the entire line
    # Usage: patch_strings_in_file <file> <pattern> <replacement>
    # replaces all occurances of <pattern> with <replacement> in <file>, padding
    # <replacement> with null characters to match the length
    # Unlike sed or patch, this works on binary files
    local FILE="$1"
    local PATTERN="$2"
    local REPLACEMENT="$3"

    # Find all unique strings in FILE that contain the pattern 
    STRINGS=$(strings ${FILE} | grep "^${PATTERN}$" | sort -u -r)

    if [ "${STRINGS}" != "" ] ; then
        echo "File '${FILE}' contains strings equal to '${PATTERN}':"

        for OLD_STRING in ${STRINGS} ; do
            # Create null terminated ASCII HEX representations of the strings
            OLD_STRING_HEX="$(echo -n ${OLD_STRING} | xxd -g 0 -u -ps -c 256)00"
            NEW_STRING_HEX="$(echo -n ${REPLACEMENT} | xxd -g 0 -u -ps -c 256)00"

            if [ ${#NEW_STRING_HEX} -le ${#OLD_STRING_HEX} ] ; then
                # Pad the replacement string with null terminations so the
                # length matches the original string
                while [ ${#NEW_STRING_HEX} -lt ${#OLD_STRING_HEX} ] ; do
                    NEW_STRING_HEX="${NEW_STRING_HEX}00"
                done

                # Now, replace every occurrence of OLD_STRING with NEW_STRING 
                echo -n "Replacing ${OLD_STRING} with ${REPLACEMENT}... "
                hexdump -ve '1/1 "%.2X"' ${FILE} | \
                sed "s/${OLD_STRING_HEX}/${NEW_STRING_HEX}/g" | \
                xxd -r -p > ${FILE}.tmp
                chmod --reference ${FILE} ${FILE}.tmp
                mv ${FILE}.tmp ${FILE}
                echo "Done!"
            else
                echo "New string '${NEW_STRING}' is longer than old" \
                     "string '${OLD_STRING}'. Skipping."
            fi
        done
    fi
}

prepare() {
  cd "${srcdir}/cabbage"
  for f in *jucer; do
    sed -i "s@/usr/local/include/csound@/usr/include/csound@g" "$f"
    sed -i "s@/usr/local/lib@/usr/lib@g" "$f"
  done

  b="${srcdir}/cabbage/Builds/LinuxMakefile/buildCabbage"
  sed -i "s@/usr/local/include/csound@/usr/include/csound@g" "$b"
  sed -i "/CabbageBuild\/cabbage.desktop/d" "$b"

  dos2unix "${srcdir}/cabbage/Source/Settings/CabbageSettings.cpp"
  patch -p1 < ../../fix_default_dirs.patch
}

pkgver() {
	cd "${srcdir}/cabbage"
	printf "2.0.0r%s" "$(git rev-list --count HEAD)"
}

build() {
  # Projucer

  sed -i -e "s/JUCER_ENABLE_GPL_MODE 0/JUCER_ENABLE_GPL_MODE 1/" \
            "${srcdir}/JUCE/extras/Projucer/JuceLibraryCode/AppConfig.h"
  cd "${srcdir}/JUCE/extras/Projucer/Builds/LinuxMakefile/"
  make -j4

  # a hack to make Projucer use the system's VST header path
  patch_strings_in_file "${srcdir}/${_projucer}" "~/SDKs/VST_SDK/VST3_SDK" "/usr/include/vst36"
  # will be replaced with the following once Cabbage is ported to JUCE 5.3.0
  # "${srcdir}/${_projucer_dir}" --set-global-search-path linux vst3Path /usr/include/vst36/

  # Cabage

  cd "${srcdir}/cabbage/Builds/LinuxMakefile"
  ./buildCabbage
}

package() {
  install -Dm644 cabbage.png "${pkgdir}/usr/share/icons/hicolor/512x512/apps/cabbage.png"
  install -Dm644 Cabbage.desktop "${pkgdir}/usr/share/applications/Cabbage.desktop"
  install -Dm644 Cabbage.desktop "${pkgdir}/usr/share/applications/CabbageLite.desktop"

  cd "${srcdir}/cabbage/Builds/LinuxMakefile/CabbageBuild/"

  for f in Cabbage CabbageLite CabbagePluginEffect.so CabbagePluginSynth.so opcodes.txt; do
    install -Dm755 "$f" "${pkgdir}/usr/bin/$f"
  done

  install -d "${pkgdir}/usr/share/doc/cabbage/examples"
  cp -r Examples/* "${pkgdir}/usr/share/doc/cabbage/examples/"
  chmod -R 755 "${pkgdir}/usr/share/doc/cabbage"
}
