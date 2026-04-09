import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Colors, Spacing, FontSize, BorderRadius } from '../../src/constants/theme';

export default function AnalyzeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>음식 분석</Text>
      <Text style={styles.subtitle}>
        음식 사진을 촬영하면 AI가 영양소를 분석해드려요
      </Text>

      {/* 카메라 영역 플레이스홀더 */}
      <View style={styles.cameraPlaceholder}>
        <Feather name="camera" size={48} color="#FFFFFF40" />
        <Text style={styles.cameraText}>카메라 미리보기</Text>
      </View>

      {/* 촬영 버튼 */}
      <View style={styles.buttonRow}>
        <Pressable style={styles.sideButton}>
          <Feather name="image" size={22} color={Colors.icon} />
          <Text style={styles.sideLabel}>갤러리</Text>
        </Pressable>

        <Pressable style={styles.captureButton}>
          <View style={styles.captureInner} />
        </Pressable>

        <Pressable style={styles.sideButton}>
          <Feather name="clock" size={22} color={Colors.icon} />
          <Text style={styles.sideLabel}>기록</Text>
        </Pressable>
      </View>

      {/* 최근 분석 */}
      <View style={styles.recentSection}>
        <Text style={styles.recentTitle}>최근 분석</Text>
        <View style={styles.emptyCard}>
          <Feather name="inbox" size={24} color={Colors.textTertiary} />
          <Text style={styles.emptyText}>
            아직 분석한 음식이 없어요.{'\n'}
            첫 번째 음식을 촬영해보세요.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xs,
  },
  cameraPlaceholder: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    borderRadius: BorderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
  cameraText: {
    color: '#FFFFFF50',
    fontSize: FontSize.sm,
    marginTop: Spacing.sm,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    gap: Spacing.xl,
  },
  captureButton: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: Colors.text,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureInner: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 2.5,
    borderColor: Colors.textLight,
  },
  sideButton: {
    alignItems: 'center',
    gap: 4,
  },
  sideLabel: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
  },
  recentSection: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
  },
  recentTitle: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.sm,
    letterSpacing: -0.3,
  },
  emptyCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    gap: Spacing.sm,
  },
  emptyText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
});
