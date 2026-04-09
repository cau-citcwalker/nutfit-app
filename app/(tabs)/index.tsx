import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Colors, Spacing, FontSize, BorderRadius } from '../../src/constants/theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 헤더 */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>안녕하세요</Text>
            <Text style={styles.userName}>뉴트핏 사용자님</Text>
          </View>
          <View style={styles.xpBadge}>
            <Text style={styles.xpText}>Lv.1 · 0 XP</Text>
          </View>
        </View>

        {/* 캐릭터 카드 */}
        <View style={styles.characterCard}>
          <View style={styles.characterIcon}>
            <Feather name="heart" size={32} color={Colors.icon} />
          </View>
          <Text style={styles.characterName}>나의 건강 캐릭터</Text>
          <View style={styles.xpBar}>
            <View style={[styles.xpFill, { width: '0%' }]} />
          </View>
          <Text style={styles.xpLabel}>다음 레벨까지 100 XP</Text>
        </View>

        {/* 오늘의 영양 요약 */}
        <Text style={styles.sectionTitle}>오늘의 영양 요약</Text>
        <View style={styles.nutrientRow}>
          <NutrientCard label="칼로리" value="--" unit="kcal" />
          <NutrientCard label="단백질" value="--" unit="g" />
          <NutrientCard label="탄수화물" value="--" unit="g" />
        </View>

        {/* 빠른 액션 */}
        <Text style={styles.sectionTitle}>빠른 시작</Text>
        <View style={styles.actionRow}>
          <ActionButton icon="camera" label="음식 촬영" />
          <ActionButton icon="plus-circle" label="영양제 복용" />
          <ActionButton icon="droplet" label="소변 검사" />
          <ActionButton icon="file-text" label="주간 리포트" />
        </View>

        {/* 오늘의 영양제 */}
        <Text style={styles.sectionTitle}>오늘의 영양제</Text>
        <View style={styles.card}>
          <Feather name="info" size={20} color={Colors.textTertiary} style={{ marginBottom: Spacing.sm }} />
          <Text style={styles.emptyText}>
            아직 맞춤 영양제가 설정되지 않았어요.{'\n'}
            프로필을 완성하고 AI 추천을 받아보세요.
          </Text>
          <Pressable style={styles.ctaButton}>
            <Text style={styles.ctaText}>프로필 설정하기</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function NutrientCard({ label, value, unit }: {
  label: string; value: string; unit: string;
}) {
  return (
    <View style={styles.nutrientCard}>
      <Text style={styles.nutrientLabel}>{label}</Text>
      <Text style={styles.nutrientValue}>{value}</Text>
      <Text style={styles.nutrientUnit}>{unit}</Text>
    </View>
  );
}

function ActionButton({ icon, label }: { icon: keyof typeof Feather.glyphMap; label: string }) {
  return (
    <Pressable style={styles.actionButton}>
      <View style={styles.actionIconWrap}>
        <Feather name={icon} size={22} color={Colors.icon} />
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
  },
  greeting: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    letterSpacing: -0.2,
  },
  userName: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
    marginTop: 2,
    letterSpacing: -0.5,
  },
  xpBadge: {
    backgroundColor: Colors.xp,
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
  },
  xpText: {
    color: Colors.textLight,
    fontSize: FontSize.xs,
    fontWeight: '600',
  },
  characterCard: {
    backgroundColor: Colors.surface,
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.md,
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  characterIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.surfaceSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterName: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.text,
    marginTop: Spacing.sm,
  },
  xpBar: {
    width: '100%',
    height: 6,
    backgroundColor: Colors.surfaceSecondary,
    borderRadius: BorderRadius.full,
    marginTop: Spacing.md,
    overflow: 'hidden',
  },
  xpFill: {
    height: '100%',
    backgroundColor: Colors.text,
    borderRadius: BorderRadius.full,
  },
  xpLabel: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  sectionTitle: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
    letterSpacing: -0.3,
  },
  nutrientRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
  },
  nutrientCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  nutrientLabel: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
  },
  nutrientValue: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
    marginTop: 2,
  },
  nutrientUnit: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
  },
  actionRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
  },
  actionIconWrap: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.surfaceSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
    fontWeight: '500',
    marginTop: 6,
    textAlign: 'center',
  },
  card: {
    backgroundColor: Colors.surface,
    marginHorizontal: Spacing.lg,
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    marginBottom: Spacing.xxl,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  emptyText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  ctaButton: {
    backgroundColor: Colors.text,
    paddingHorizontal: Spacing.lg,
    paddingVertical: 10,
    borderRadius: BorderRadius.full,
    marginTop: Spacing.md,
  },
  ctaText: {
    color: Colors.textLight,
    fontWeight: '600',
    fontSize: FontSize.sm,
  },
});
